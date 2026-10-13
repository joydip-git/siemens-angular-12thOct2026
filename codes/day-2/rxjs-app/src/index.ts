import { Observable, Observer, Subscription } from "rxjs";
import { DataStorage } from "./storage";

//consumer
const consumerStorage = DataStorage.instantiate()
const obs: Observable<number> = consumerStorage.storeObservable
const observer: Observer<number> = {
    next: (data) => {
        console.log('received data ' + data);
    },
    error: (err) => console.log(err.message),
    complete: () => console.log('nothing to do actually')
}
const sub: Subscription = obs.subscribe(observer)

setTimeout(
    () => {
        sub.unsubscribe()
    },
    10000
)


//publisher
const publisherStorage = DataStorage.instantiate()

let value = 1
setInterval(
    () => {
        console.log('publishing ' + value);
        publisherStorage.publish(value)
        value++
    },
    1000
)