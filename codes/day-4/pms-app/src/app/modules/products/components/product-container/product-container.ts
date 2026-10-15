import { Component, signal } from '@angular/core';
import { ProductList } from '../product-list/product-list';
import { FilterProduct } from '../filter-product/filter-product';

@Component({
  imports: [ProductList, FilterProduct],
  selector: 'app-product-container',
  styleUrl: './product-container.css',
  templateUrl: './product-container.html',
})
export class ProductContainer {
  filterData = signal('')
}
