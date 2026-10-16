import { Component, effect, EffectCleanupRegisterFn, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ProductStorageService } from '../../services/product-storage-service';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product';

@Component({
  imports: [],
  selector: 'app-edit-product',
  styleUrl: './edit-product.css',
  templateUrl: './edit-product.html',
})
export class EditProduct {

  private storageSvc = inject(ProductStorageService)
  private sub?: Subscription;

  product = signal<Product | null>(null)

  constructor() {
    effect(
      (cleanUp) => {
        this.getProduct(cleanUp)
      }
    )
  }
  getProduct(cleanUp: EffectCleanupRegisterFn): void {
    this.sub = this.storageSvc.productStore.subscribe(
      (p) => {
        this.product.set(p)
      }
    )
    cleanUp(
      () => this.sub?.unsubscribe()
    )
  }
}

// export class EditProduct implements OnInit, OnDestroy {

//   private storageSvc = inject(ProductStorageService)
//   private sub?: Subscription;

//   product = signal<Product | null>(null)

//   ngOnInit(): void {
//     this.sub = this.storageSvc.productStore.subscribe(
//       (p) => {
//         this.product.set(p)
//       }
//     )
//   }
//   ngOnDestroy(): void {
//     this.sub?.unsubscribe()
//   }
// }

