import { Component, inject, OnDestroy, signal } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { TokenStorageService } from '../../../shared/services/token-storage-service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login implements OnDestroy {
  username = signal('')
  password = signal('')
  private authSvc = inject(AuthService)
  private toksnStorageSvc = inject(TokenStorageService)
  private currentRoute = inject(ActivatedRoute)
  private router = inject(Router)
  private sub?: Subscription;

  login() {
    this.sub = this.authSvc
      .authenticate({ username: this.username(), password: this.password() })
      .subscribe(
        {
          next: (apiResponse) => {
            if (apiResponse.data !== null) {
              alert('successfully logged in')
              this.toksnStorageSvc.saveToken(apiResponse.data)
            } else {
              alert(apiResponse.message)
            }
          },
          error: (err) => {
            alert(err.message)
          },
          complete: () => {
            const snapshot: ActivatedRouteSnapshot = this.currentRoute.snapshot
            const returnUrl = snapshot.queryParams['returnUrl']
            if (returnUrl && returnUrl !== '') {
              this.router.navigate([returnUrl])
            } else {
              this.router.navigate(['/products'])
            }
          }
        }
      )
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
}
