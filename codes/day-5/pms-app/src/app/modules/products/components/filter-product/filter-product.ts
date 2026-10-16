import { Component, output, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-filter-product',
  styleUrl: './filter-product.css',
  templateUrl: './filter-product.html',
})
export class FilterProduct {
  filterValue = signal('')
  filterValueChanged = output<string>()
  
  emitFilterValue(value: string) {
    this.filterValueChanged.emit(value)
  }
}
