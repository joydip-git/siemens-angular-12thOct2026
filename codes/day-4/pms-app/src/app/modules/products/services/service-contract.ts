import { Observable } from "rxjs";
import { Product } from "../models/product";
import { ApiResponse } from "../../shared/models/api-response";

export interface ServiceContract {

    add(data: Product): Observable<ApiResponse<Product[]>>;
    delete(id: number): Observable<ApiResponse<Product[]>>;
    get(id: number): Observable<ApiResponse<Product>>;
    getAll(): Observable<ApiResponse<Product[]>>;
    update(id: number, data: Product): Observable<ApiResponse<Product[]>>;
    
}