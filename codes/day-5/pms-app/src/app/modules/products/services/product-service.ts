import { Observable, retry } from "rxjs";
import { ApiResponse } from "../../shared/models/api-response";
import { Product } from "../models/product";
import { ServiceContract } from "./service-contract";
import { inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_BASE_URL } from "../../../config/constants";

export class ProductService implements ServiceContract {
    private http = inject(HttpClient)
    private PRODUCT_API_URL = `${API_BASE_URL}/products`

    add(data: Product): Observable<ApiResponse<Product[]>> {
        return this.http.post<ApiResponse<Product[]>>(this.PRODUCT_API_URL, data)
    }
    delete(id: number): Observable<ApiResponse<Product[]>> {
        return this.http.delete<ApiResponse<Product[]>>(`${this.PRODUCT_API_URL}/${id}`)
    }
    get(id: number): Observable<ApiResponse<Product>> {
        return this.http.get<ApiResponse<Product>>(`${this.PRODUCT_API_URL}/${id}`)
    }
    getAll(): Observable<ApiResponse<Product[]>> {
        return this.http.get<ApiResponse<Product[]>>(this.PRODUCT_API_URL)
    }
    update(id: number, data: Product): Observable<ApiResponse<Product[]>> {
        return this.http.put<ApiResponse<Product[]>>(`${this.PRODUCT_API_URL}/${id}`, data)
    }
}