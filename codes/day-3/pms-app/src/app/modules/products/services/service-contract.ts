import { Product } from "../models/product";

export interface ServiceContract {
    getAll(): Product[];
}