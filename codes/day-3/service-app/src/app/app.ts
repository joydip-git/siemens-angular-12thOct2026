import { Component, Inject, inject, signal } from '@angular/core';
import { DataService } from './services/data-service';
import { API_PATH_TOKEN, CLASS_TOKEN } from './config/constants';
import { TodoList } from './todo-list/todo-list';
// import { provideDataServiceClassProvider } from './config/constants';

@Component({
  selector: 'app-root',
  imports: [TodoList],
  templateUrl: './app.html',
  styleUrl: './app.css',
  //providers: [provideDataServiceProvider()]
})
export class App {

  //private ds: DataService;
  //data = ''
  // constructor(ds: DataService) {
  //   this.ds = ds
  // }


  path = ''
  // constructor(
  //   @Inject(CLASS_TOKEN) ds: DataService,
  //   @Inject(API_PATH_TOKEN) apiPath: string) {
  //   this.ds = ds
  //   this.data = this.ds.getData()
  //   this.path = apiPath
  // }
  constructor(@Inject(API_PATH_TOKEN) apiPath: string) {
    this.path = apiPath
  }

  //private ds = inject(DataService)
  // data = this.ds.getData()

  private ds = inject<DataService>(CLASS_TOKEN)
  data = this.ds.getData()
}
