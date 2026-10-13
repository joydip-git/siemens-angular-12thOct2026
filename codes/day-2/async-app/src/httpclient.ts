import { BehaviorSubject, Observable, of } from "rxjs";
export class HttpClient {
    get<T>(url: string): Observable<T[]> {
        const subject = new BehaviorSubject<T[]>([])
        fetch(url)
            .then(
                async (response) => {
                    const data = await response.json()
                    subject.next(data as T[])
                }
            )
        return subject.asObservable()
    }
}

/**
 *    async get(url: string) {
        const observable = 
    try {
            const response: Response = await fetch(url)
            const data = await response.json()
            console.log(data.slice(0, 5));

        } catch (e: any) {
            console.log(e.message);
        }
    }
 */
