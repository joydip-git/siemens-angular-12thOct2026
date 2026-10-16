import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router, RouterLink } from '@angular/router';
import { PRODUCT_SERVICE_TOKEN } from '../../../../config/constants';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product';
import { LoadingSpinner } from '../../../shared/components/loading-spinner/loading-spinner';
import { CurrencyPipe } from '@angular/common';
import { ProductStorageService } from '../../services/product-storage-service';

@Component({
  imports: [LoadingSpinner, RouterLink, CurrencyPipe],
  selector: 'app-product-detail',
  styleUrl: './product-detail.css',
  templateUrl: './product-detail.html',
})
export class ProductDetail implements OnInit, OnDestroy {

  private storageSvc = inject(ProductStorageService)
  private router = inject(Router)
  private currentRouteInfo = inject(ActivatedRoute)
  private ps = inject(PRODUCT_SERVICE_TOKEN)
  private fetchSubscription?: Subscription;

  isLoadingOver = signal(false)
  errorInfo = signal('')
  product = signal<Product | undefined>(undefined)

  gotToEdit() {
    const p = this.product()
    if (p) {
      this.storageSvc.publish(p)
      this.router.navigate(
        ['/products/edit'],
        {
          queryParams: { id: p.productId }
        })
    }
  }

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
