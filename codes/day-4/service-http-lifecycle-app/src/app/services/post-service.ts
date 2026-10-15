import { Observable } from "rxjs";
import { Post } from "../models/post";
import { Repository } from "./repository";
import { inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BASE_API_URL } from "../config/constants";

export class PostService implements Repository<Post> {
    private http = inject(HttpClient)
    private POST_API_URL = `${BASE_API_URL}/posts`

    getAll(): Observable<Post[]> {
        return this.http.get<Post[]>(this.POST_API_URL)
    }
    get(id: number): Observable<Post> {
        return this.http.get<Post>(`${this.POST_API_URL}/${id}`)
    }
    add(data: Post): Observable<Post> {
        return this.http.post<Post>(this.POST_API_URL, data)
    }
    update(id: number, data: Post): Observable<Post> {
        return this.http.put<Post>(`${this.POST_API_URL}/${id}`, data)
    }
    delete(id: number): Observable<Post> {
        return this.http.delete<Post>(`${this.POST_API_URL}/${id}`)
    }
}