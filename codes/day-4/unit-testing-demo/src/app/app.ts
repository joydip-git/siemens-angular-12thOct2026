import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from './services/todo-service';
import { Todo } from './models/todo';
import { TOKEN } from './constants';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  todos = signal<Todo[]>([])
  title = signal('unit-testing-demo');
  //private todoSvc = inject(TodoService)
  private todoSvc = inject(TOKEN)
  updateTitle(value: string) {
    this.title.set(value)
  }

  ngOnInit(): void {
    this.todos.set(this.todoSvc.getTodos())
  }
}
