import { InjectionToken } from "@angular/core";
import { ServiceContract } from "../modules/products/services/service-contract";
import { ProductService } from "../modules/products/services/product-service";

export const PRODUCT_SERVICE_TOKEN = new InjectionToken<ServiceContract>('PRODUCT_SERVICE_TOKEN')
export const PRODUCT_SERVICE_TYPE = ProductService

export const API_BASE_URL = 'http://localhost:3000'