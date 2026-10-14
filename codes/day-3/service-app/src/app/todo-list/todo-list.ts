import { Component, effect, EffectCleanupRegisterFn, inject, signal } from "@angular/core";
import { SERVICE_TOKEN } from "../config/constants";
import { Repository } from "../services/repository";
import { Todo } from "../models/todo";

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.html'
})
export class TodoList {
    private todoSvc: Repository = inject(SERVICE_TOKEN)
    todos = signal<Todo[]>([])
    errorInfo = signal('')
    isRequestOver = signal(false)
    //passTodos = output<Todo[]>()

    constructor() {
        effect(
            (cleanUpFn: EffectCleanupRegisterFn) => {
                const obs = this.todoSvc.getTodos()
                const subscription = obs
                    .subscribe({
                        next: (records) => {
                            this.todos.set(records)
                            this.errorInfo.set('')
                            this.isRequestOver.set(true)
                        },
                        error: (err) => {
                            this.todos.set([])
                            this.errorInfo.set(err.message)
                            this.isRequestOver.set(true)
                        },
                        //complete: () => { }
                    })

                cleanUpFn(() => {
                    subscription.unsubscribe()
                })
            }
        )
    }
}