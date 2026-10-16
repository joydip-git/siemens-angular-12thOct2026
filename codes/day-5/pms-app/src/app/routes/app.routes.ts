import { Routes } from '@angular/router';
import { ProductContainer } from '../modules/products/components/product-container/product-container';

export const routes: Routes = [
    {
        path: 'products', component: ProductContainer
    }
];
