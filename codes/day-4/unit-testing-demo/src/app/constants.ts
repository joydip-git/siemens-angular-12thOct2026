import { ClassProvider, InjectionToken } from "@angular/core";
import { TodoService } from "./services/todo-service";

export const TOKEN = new InjectionToken<TodoService>('TOKEN')
export const provideTodoService = (): ClassProvider => {
    return {
        provide: TOKEN,
        useClass: TodoService
    }
}