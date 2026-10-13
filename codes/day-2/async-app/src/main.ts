import { HttpClient } from "./httpclient"
import { Todo } from "./models/todo"

const client = new HttpClient()
const todosObs = client.get<Todo>('https://jsonplaceholder.typicode.com/todos')
todosObs
    .subscribe(
        (todos) => {
            console.log(todos.slice(0, 5));
        }
)
    
console.log('something else');