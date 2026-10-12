//object literal syntax
const obj = {
    id: 1,
    name: 'anil',
    salary: 1000,
    show: function () {
        return `${this.name},${this.name}, ${this.salary}`
    }
}

console.log(obj.name);
console.log(obj['salary']);
console.log(obj.show());

/*
//constructor function
function person(idValue: number, namevalue: string, salaryValue: number) {
    var x = 100
    const y = 200
    let z = 300
    this.id = idValue
    this.name = namevalue
    this.salary = salaryValue
    this.show = function () {
        return `${this.id},${this.name}, ${this.salary}`
    }
    return this
}

function trainer(idValue: number, namevalue: string, salaryValue: number, subject: string) {
    person.call(this, idValue, namevalue, salaryValue)
    this.subject = subject
    this.show = function () {
        return `${this.id},${this.name}, ${this.salary}, ${this.subject}`
    }
    return this
}
const anilObj = new trainer(1, 'anil', 1000, 'JS')
console.log(anilObj);
console.log(anilObj.id);
console.log(anilObj.name);
console.log(anilObj.show());


var a = 100
function outer() {

    var x = 10
    function inner() {
        var y = 20
        console.log(a + x + y);
    }
    // inner()
    return inner
}

const innerFnRef = outer()
innerFnRef()

function add(a: number, b: number) {
    return a + b
}

console.log(add.prototype);


// person.prototype.sayHi = function () {
//     return "hi"
// }
// console.log(anilObj.sayHi());
*/

class Person {
    private _id: number;
    private _name: string;
    private _salary: number;

    constructor(idValue: number, namevalue: string, salaryValue: number) {
        this._id = idValue
        this._name = namevalue
        this._salary = salaryValue
    }
    get id() {
        return this._id
    }
    set id(value: number) {
        this._id = value
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get salary(): number {
        return this._salary;
    }
    public set salary(value: number) {
        this._salary = value;
    }

    show() {
        return `${this._id},${this._name}, ${this._salary}`
    }
}

class Trainer extends Person {
    private _subject: string;

    constructor(idValue: number, namevalue: string, salaryValue: number, subjectValue: string) {
        super(idValue, namevalue, salaryValue)
        this._subject = subjectValue
    }
    public get subject(): string {
        return this._subject;
    }
    public set subject(value: string) {
        this._subject = value;
    }
    show(): string {
        return `${super.show()}, ${this._subject}`
    }
}
const anilObj = new Trainer(1, 'anil', 1000, 'Angular')
console.log(anilObj.show());

interface Operations<T, TResult> {
    add(a: T, b: T): TResult;
}
class Impl implements Operations<number, number> {
    add(a: number, b: number): number {
        return a + b
    }
}

interface Category {
    categoryId: number;
    categoryName: string;
    description?: string;
}

const laptop: Category = {
    categoryId: 1,
    categoryName: 'laptop',
    //description:'laptop category'
}

type myType = string | number;
function subtract(a: number, b: number): myType {
    return (a - b).toString()
}

type FnType<T, TResult> = (x: T, y: T) => TResult
function invoke(fnRef: FnType<number, myType>, a: number, b: number): void {
    console.log(fnRef(a, b))
}

invoke(
    (a: number, b: number) => a * b,
    10, 5)

type CategoryType = {
    categoryId: number,
    categoryName: string,
    description?: string
}

type SomeType = {
    additionalInfo: string
} & CategoryType;

const mobile: CategoryType = {
    categoryId: 2,
    categoryName: 'mobile'
}

