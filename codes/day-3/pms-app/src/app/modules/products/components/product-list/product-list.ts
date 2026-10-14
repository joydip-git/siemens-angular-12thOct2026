import { Component, inject, input, signal } from '@angular/core';
import { productRecods } from '../../repository/productrecords';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { ProductFilterPipe } from '../../pipes/product-filter-pipe';
import { Product } from '../../models/product';
import { ServiceContract } from '../../services/service-contract';
import { PRODUCT_SERVICE_TOKEN } from '../../../../config/constants';

@Component({
  imports: [CurrencyPipe, UpperCasePipe, ProductFilterPipe],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  products = signal<Product[]>([])
  filterText = input('')
  private ps = inject<ServiceContract>(PRODUCT_SERVICE_TOKEN)

  constructor() {
    this.products.set(this.ps.getAll())
  }
}
