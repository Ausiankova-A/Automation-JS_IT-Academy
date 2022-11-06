interface Пользователь {
    name: string,
    age: number,
    occupation: string,
    car?: string,
    children?: number
}
const users: Пользователь[] = [{
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep',
    car: 'VW'
},
{
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut',
    children: 2
}
];



interface User {
    name: string,
    age: number,
    occupation?: string,
    role?: string
}
interface Admin {
    name: string,
    age: number,
    role: 'Administrator'
}
interface Person {
    [index: number]: User | Admin;
}
// type Person = unknown;
const persons: Person = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];



interface userId {
    [key: string]: number | string
}
export class ObjectManipulator {
    constructor(protected obj: userId) { this.obj = obj }

    public set(key: string, value: number | string) {
        return new ObjectManipulator({ ...this.obj, [key]: value });
    }

    public get(key: string) {
        return this.obj[key];
    }

    public delete(key: string) {
        const newObj = { ...this.obj };
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject() {
        return this.obj;
    }
}

/**
 * 2 arguments passed: returns a new array
 * which is a result of input being mapped using
 * the specified mapper.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being mapped using original mapper.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} mapper
 * @param {Array} input
 * @return {Array | Function}
 */
function doubledInput(element: number): number { return element * 2 }

export function map(mapper?: typeof doubledInput, input?: number[]): number[] | Function {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput?: number[]): number[] | Function {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput!.map(mapper!);
        };
    }
    return input!.map(mapper!);
}
/**
 * 2 arguments passed: returns a new array
 * which is a result of input being filtered using
 * the specified filter function.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being filtered using original filter
 * function.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} filterer
 * @param {Array} input
 * @return {Array | Function}
 */
function findPrime(element: string): boolean { return element.length > 6 }

export function filter(filterer?: typeof findPrime, input?: string[]): string[] | Function {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput?: string[]): string[] | Function {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput!.filter(filterer!);
        };
    }
    return input!.filter(filterer!);
}


/**
 * 2 arguments passed: returns sum of a and b.
 *
 * 1 argument passed: returns a function which expects
 * b and returns sum of a and b.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */


export function add(a?: number, b?: number): number | Function {
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction(subB?: number): number | Function {
            if (arguments.length === 0) {
                return subFunction;
            }
            return a! + subB!;
        };
    }
    return a! + b!;
}