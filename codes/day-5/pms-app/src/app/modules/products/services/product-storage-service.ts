import { Service } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

//{provide: ProductStorageService, useClass: ProductStorageService} and registered at the root level
@Service()
export class ProductStorageService {
    private _store = new BehaviorSubject<Product | null>(null)
    productStore = this._store.asObservable()

    publish(p: Product) {
        this._store.next(p)
    }
    remove() {
        this._store.next(null)
    }
}
