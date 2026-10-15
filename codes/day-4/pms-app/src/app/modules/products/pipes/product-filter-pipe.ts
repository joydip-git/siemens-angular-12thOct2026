import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "../models/product";

@Pipe({
    name: 'productfilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: Product[], ...args: string[]): Product[] {
        return args[0] && args[0] !== '' ?
            value.filter(
                (p) => p.productName
                    .toLowerCase()
                    .includes(args[0].toLowerCase())
            ) : value;
    }
}