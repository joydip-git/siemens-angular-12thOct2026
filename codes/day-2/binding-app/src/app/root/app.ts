import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //title = "welcome to binding"
  title: WritableSignal<string> = signal<string>("welcome to binding")
  width = 400

  // updateTitle(value: string | null) {
  //   if (value)
  //     this.title.set(value)
  // }
}
