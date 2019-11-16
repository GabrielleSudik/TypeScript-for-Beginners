//lessons 39-41
//generics and enums

//first some background examples:

function identity1(args: number): number {
    return args;
}

function identity2(args: any): any {
    return args;
}
//any is sort of a generic because it accepts anything.

function identity3<T>(arg: T): T {
    return arg;
}
//T is a type variable, it will capture whatever the user provides
//a string, an array, a custom, whatever.
//this is a "true" generic.

//how to use it?
let a = identity3("my string");
//let a = identity3(arg: "my string"); //like in other lessons, arg: throws an error
let b = identity3(true);

//generic interfaces

interface GenericInterface<T> {
    (arg: T): T;
}

//generic class

class GenericClass<T>{
    zeroValue: T; //this is a property
    add: (x: T, y: T) => T; //this is a function
}
//prof flew threw this. I am inferring that
//zeroValue and add are his variable/function names.
//not keywords.

//enums
//you can think of enums in terms of numbers
//but given human-readable names.

enum DoorState {
    Open,
    Closed,
    Ajar
}
//below the code, TS assigns ints to each value
//Open = 0, etc.

console.log(DoorState.Ajar); //2
console.log(DoorState[1]); //Closed