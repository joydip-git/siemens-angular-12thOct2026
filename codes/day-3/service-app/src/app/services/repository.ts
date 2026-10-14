import { Observable } from "rxjs";
import { Todo } from "../models/todo";

export interface Repository {
    getTodos(): Observable<Todo[]>;
    getTodo(id: number): Observable<Todo>;
}