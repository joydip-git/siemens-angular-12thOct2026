import { Component, computed, signal, WritableSignal } from '@angular/core';
import { NEVER } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //title = "welcome to binding"
  title: WritableSignal<string> = signal("welcome to binding")
  width = 400
  count = signal(0)
  doubleCount = computed(() => this.count() * 2)
  names = signal<string[]>(['anil', 'sunil', 'joydip'])
  filterText = signal('')
  filteredNames = computed(() => this.names()
    .filter(name => name && name !== '' ? name
      .toLocaleLowerCase()
      .includes(this.filterText().toLocaleLowerCase()) : name
    )
  )

  increase() {
    this.count.update((oldVlaue) => oldVlaue + 1)
  }

  // updateTitle(value: string | null) {
  //   if (value)
  //     this.title.set(value)
  // }
}
