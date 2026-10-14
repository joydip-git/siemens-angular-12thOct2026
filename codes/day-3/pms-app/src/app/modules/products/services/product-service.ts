import { Product } from "../models/product";
import { productRecods } from "../repository/productrecords";
import { ServiceContract } from "./service-contract";

export class ProductService implements ServiceContract {
    getAll(): Product[] {
        const copy = [...productRecods]
        return copy
    }
}