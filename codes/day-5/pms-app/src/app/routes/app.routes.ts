import { Routes } from '@angular/router';
import { ProductContainer } from '../modules/products/components/product-container/product-container';
import { ProductDetail } from '../modules/products/components/product-detail/product-detail';
import { EditProduct } from '../modules/products/components/edit-product/edit-product';
import { AddProduct } from '../modules/products/components/add-product/add-product';
import { Registration } from '../modules/auth/components/registration/registration';
import { Login } from '../modules/auth/components/login/login';
import { Home } from '../modules/shared/components/home/home';
import { PageNotFound } from '../modules/shared/components/page-not-found/page-not-found';
import { ProductAuthGuard } from '../modules/products/guards/product-auth-guard';

export const routes: Routes = [
    {
        path: 'products',
        canActivate:[ProductAuthGuard],
        children: [
            {
                path: '',
                component: ProductContainer
            },
            {
                path: 'view/:id',
                component: ProductDetail
            },
            {
                path: 'edit',
                component: EditProduct
            },
            {
                path: 'add',
                component: AddProduct
            }
        ]
    },
    {
        path: 'auth',
        children: [
            {
                path: 'register',
                component: Registration
            },
            {
                path: 'login',
                component: Login
            }
        ]
    },
    {
        path: 'home', component: Home
    },
    {
        path: '', pathMatch: 'full', redirectTo: '/home'
    },
    {
        path: '**', component: PageNotFound
    }
];
