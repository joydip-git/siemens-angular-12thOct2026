import { Component, input, signal } from '@angular/core';
import { productRecods } from '../../repository/productrecords';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { ProductFilterPipe } from '../../pipes/product-filter-pipe';

@Component({
  imports: [CurrencyPipe, UpperCasePipe, ProductFilterPipe],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  products = signal(productRecods)
  filterText = input('')
}
