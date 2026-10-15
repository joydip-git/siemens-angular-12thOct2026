import { ClassProvider } from "@angular/core";
import { SERVICE_CLASS, SERVICE_TOKEN } from "./constants";

export const provideRepositoryService = (): ClassProvider => {
    return {
        provide: SERVICE_TOKEN,
        useClass: SERVICE_CLASS
    }
}