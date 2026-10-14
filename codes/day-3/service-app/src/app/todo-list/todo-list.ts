import { Component, effect, EffectCleanupRegisterFn, inject, OnDestroy, OnInit, signal } from "@angular/core";
import { SERVICE_TOKEN } from "../config/constants";
import { Repository } from "../services/repository";
import { Todo } from "../models/todo";
import { Subscription } from "rxjs";
import { TodoInfo } from "../todo-info/todo-info";

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.html',
    imports: [TodoInfo]
})
export class TodoList implements OnInit, OnDestroy {
    private todoSvc: Repository = inject(SERVICE_TOKEN)
    private fetchSubscription?: Subscription;

    todos = signal<Todo[]>([])
    errorInfo = signal('')
    isRequestOver = signal(false)
    selectedTodoId = signal(0)

    constructor() {
        console.log('[TDL] created');
    }

    ngOnDestroy(): void {
        console.log('[TDL] is about to be destroyed');
        this.fetchSubscription?.unsubscribe()
    }

    ngOnInit(): void {
        console.log('[TDL] is about fetch data in init');
        this.fetchTodos()
    }

    private fetchTodos() {
        this.fetchSubscription =
            this.todoSvc
                .getTodos()
                .subscribe({
                    next: (data) => {
                        this.todos.set(data.slice(0, 10))
                        this.errorInfo.set('')
                        this.isRequestOver.set(true)
                    },
                    error: (err) => {
                        this.todos.set([])
                        this.errorInfo.set(err.message)
                        this.isRequestOver.set(true)
                    }
                })
    }
}