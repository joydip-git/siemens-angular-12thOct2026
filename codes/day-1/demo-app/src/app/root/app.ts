import { Component, inject } from '@angular/core';
import { DataSevice } from '../data-service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [UpperCasePipe],
  //template:'<h2>{{title}}</h2>',
  templateUrl: './app.html',
  styleUrl: './app.css',
  //providers: [DataSevice]
})
export class App {
  title = "NA"
  private ds: DataSevice = inject(DataSevice);
  constructor() {
    //this.ds =inject(DataSevice);
    this.title = this.ds.getData()
  }
}
