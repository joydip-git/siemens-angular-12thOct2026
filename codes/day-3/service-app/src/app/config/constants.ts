import { ClassProvider, FactoryProvider, InjectionToken, Provider, ValueProvider } from "@angular/core";
import { DataService, StringDataService } from "../services/data-service";
import { TodoRepositoryService } from "../services/todo-repository-service";
import { Repository } from "../services/repository";

// export const CLASS_TOKEN = DataService
//export const CLASS_TOKEN = 'TOKEN'
export const CLASS_TOKEN = new InjectionToken<DataService>('TOKEN')
export const SERVICE = StringDataService

export const FACTORY_TOKEN = 'FACTORY_TOKEN'

export const API_PATH = 'http://.../'
export const API_PATH_TOKEN = 'API_PATH_TOKEN'

export const TODO_API_URL = 'https://jsonplaceholder.typicode.com/todos'

export const SERVICE_TOKEN = new InjectionToken<Repository>('SERVICE_TOKEN')
export const SERVICE_TYPE = TodoRepositoryService

export const provideTodoService = (): ClassProvider => {
    return {
        provide: SERVICE_TOKEN,
        useClass: SERVICE_TYPE
    }
}

export const provideDataServiceClassProvider = (): ClassProvider => {
    return {
        provide: CLASS_TOKEN,
        useClass: SERVICE
    }
}

export const provideApiPathProvider = (): ValueProvider => {
    return {
        provide: API_PATH_TOKEN,
        useValue: API_PATH
    }
}

export const provideDataServiceFactoryProvider = (): FactoryProvider => {
    return {
        provide: FACTORY_TOKEN,
        useFactory: () => {
            return new StringDataService()
        }
    }
}