import { Component, effect, EffectCleanupRegisterFn, inject, input, signal } from '@angular/core';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { ProductFilterPipe } from '../../pipes/product-filter-pipe';
import { Product } from '../../models/product';
import { ServiceContract } from '../../services/service-contract';
import { PRODUCT_SERVICE_TOKEN } from '../../../../config/constants';
import { Subscription } from 'rxjs';
import { LoadingSpinner } from '../../../shared/components/loading-spinner/loading-spinner';

@Component({
  imports: [CurrencyPipe, UpperCasePipe, ProductFilterPipe, LoadingSpinner],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {

  protected isLoadingOver = signal(false)
  protected errorInfo = signal('')
  protected products = signal<Product[]>([])

  filterText = input('')

  private ps = inject<ServiceContract>(PRODUCT_SERVICE_TOKEN)
  private fetchSubscription?: Subscription;

  constructor() {
    effect(
      (cleanUp: EffectCleanupRegisterFn) => {
        
        this.fetchProducts(cleanUp)
        // setTimeout(
        //   () => this.fetchProducts(cleanUp),
        //   3000
        // )
      }
    )
  }

  private fetchProducts(cleanUp: EffectCleanupRegisterFn) {
    
    //effect code
    this.fetchSubscription =
      this.ps.getAll().subscribe({
        next: (apiResponse) => {
          if (apiResponse.data !== null) {
            this.isLoadingOver.set(true)
            this.errorInfo.set('')
            this.products.set(apiResponse.data)
          } else {
            this.isLoadingOver.set(true)
            this.errorInfo.set(apiResponse.message)
            this.products.set([])
          }
        },
        error: (err) => {
          this.isLoadingOver.set(true)
          this.errorInfo.set(err.message)
          this.products.set([])
        }
      })
    
    //registering clean-up callback
    cleanUp(
      () => this.fetchSubscription?.unsubscribe()
    )
  }
}
