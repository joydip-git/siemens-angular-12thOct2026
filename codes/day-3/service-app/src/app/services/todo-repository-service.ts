import { inject } from "@angular/core";
import { Repository } from "./repository";
import { HttpClient } from "@angular/common/http";
import { TODO_API_URL } from "../config/constants";
import { Todo } from "../models/todo";
import { filter, Observable } from "rxjs";
//import { Observable, map, filter } from "rxjs";

export class TodoRepositoryService implements Repository {
    private _http = inject(HttpClient)

    getTodo(id: number): Observable<Todo> {
        return this._http.get<Todo>(`${TODO_API_URL}/${id}`)
    }

    getTodos() {
        /*
        const obs: Observable<any> = this._http.get<any>(TODO_API_URL)
        return obs
            .pipe(
                map(
                    (data: any) => {
                        return data.map(
                            (td: any): Todo => {
                                return {
                                    userId: td.userId,
                                    id: td.id,
                                    title: td.title,
                                    completed: td.completed
                                }
                            }
                        )
                    }
                ),
                filter(
                    (todo) => todo.completed === true
                )
            )
            */

        return this._http.get<Todo[]>(TODO_API_URL)
    }
}