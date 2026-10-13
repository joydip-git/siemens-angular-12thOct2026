import { Component, signal } from '@angular/core';
import { Nested } from '../nested/nested';

@Component({
  selector: 'app-root',
  imports: [Nested],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = signal('NA')
  updateName(newName: string) {
    this.name.set(newName)
  }
}
