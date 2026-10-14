//import { Service } from "@angular/core";

//Decorator that marks a class as a service and makes it automatically available in the dependency injection system and registered at the root level
//@Service() -> providers:[DataService] -> providers:[{provide: DataService, useClass: DataService}]
export class StringDataService implements DataService {
    getData() {
        return "some data"
    }
}

export interface DataService {
    getData(): string;
}