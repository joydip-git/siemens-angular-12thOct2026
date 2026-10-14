import { Component, inject, input, OnChanges, OnDestroy, signal, SimpleChanges } from '@angular/core';
import { SERVICE_TOKEN } from '../config/constants';
import { Todo } from '../models/todo';
import { Subscription } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-todo-info',
  styleUrl: './todo-info.css',
  templateUrl: './todo-info.html',
})
export class TodoInfo implements OnChanges, OnDestroy {

  private todoSvc = inject(SERVICE_TOKEN)
  private fetchSub?: Subscription;

  todoId = input(0)
  todo = signal<Todo | null>(null)
  isRequestOver = signal(false)
  errorInfo = signal('')

  ngOnChanges(changes: SimpleChanges): void {
    this.fetchSub = this.todoSvc.getTodo(this.todoId()).subscribe(
      {
        next: (data) => {
          this.todo.set(data)
          this.errorInfo.set('')
          this.isRequestOver.set(true)
        },
        error: (err) => {
          this.todo.set(null)
          this.errorInfo.set(err.message)
          this.isRequestOver.set(true)
        }
      }
    )
  }
  ngOnDestroy(): void {
    this.fetchSub?.unsubscribe()
  }
}
