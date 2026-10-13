import { BehaviorSubject } from "rxjs";

export class DataStorage {
    private static storage: DataStorage | undefined = undefined;

    private _store = new BehaviorSubject<number>(0)
    storeObservable = this._store.asObservable()

    private constructor() {

    }

    static instantiate() {
        if (this.storage === undefined) {
            this.storage = new DataStorage()
        }
        return this.storage
    }

    publish(value: number) {
        this._store.next(value)
    }
}