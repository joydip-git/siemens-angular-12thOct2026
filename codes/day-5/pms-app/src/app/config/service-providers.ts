import { ClassProvider } from "@angular/core"
import { PRODUCT_SERVICE_TOKEN, PRODUCT_SERVICE_TYPE } from "./constants"

export const provideProductService = (): ClassProvider => {
    return {
        provide: PRODUCT_SERVICE_TOKEN,
        useClass: PRODUCT_SERVICE_TYPE
    }
}