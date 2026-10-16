import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params } from '@angular/router';
import { PRODUCT_SERVICE_TOKEN } from '../../../../config/constants';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product';

@Component({
  imports: [],
  selector: 'app-product-detail',
  styleUrl: './product-detail.css',
  templateUrl: './product-detail.html',
})
export class ProductDetail implements OnInit, OnDestroy {
  private currentRouteInfo = inject(ActivatedRoute)
  private ps = inject(PRODUCT_SERVICE_TOKEN)
  private fetchSubscription?: Subscription;

  isLoadingOver = signal(false)
  errorInfo = signal('')
  product = signal<Product | undefined>(undefined)

  ngOnInit(): void {
    const currentRouteState: ActivatedRouteSnapshot = this.currentRouteInfo.snapshot;
    const params: Params = currentRouteState.params;
    const id = Number(params['id'])
   
    this.fetchSubscription = this.ps.get(id).subscribe({
      next: (apiReponse) => {
        if (apiReponse.data !== null) {
          this.product.set(apiReponse.data)
          this.errorInfo.set('')
          this.isLoadingOver.set(true)
        } else {
          this.product.set(undefined)
          this.errorInfo.set(apiReponse.message)
          this.isLoadingOver.set(true)
        }
      },
      error: (err) => {
        this.product.set(undefined)
        this.errorInfo.set(err.message)
        this.isLoadingOver.set(true)
      }
    })
  }

  ngOnDestroy(): void {
    this.fetchSubscription?.unsubscribe()
  }
}
