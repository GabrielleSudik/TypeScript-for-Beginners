//23+ fundamentals of TS
//this class starts with the hard stuff then does the easy stuff lol

//lesson 24 & 25: basic types:

//to check out stuff in the console:
//"node name-of-script.ts" ta da.

//getting errors in the console?
//"tsc name-of-app.ts" to transpile to js.
//"node name-of-script.js" ta da.

//TS does not allow for changing of variable type (unlike JS)
let radius = 4;
//radius = 'Gaby'; //you'll get an error on hover or transpile here because TS can't reassign types of variables.
console.log(radius); //note it will print 'Gaby' though, presumably because of the transpile to JS.

//TS uses type identifier: [name]: [type]= [value]
let marxist: string = 'Karl';
let marxistNumber: number = 1917;

let example1: any = Date(); //"any" can handle anything. numbers, strings, misc.

let names1: string[] = ['Gaby', 'Amy', 'Iyad', '4']; //a plain 4 will give an error.
let names2: any[] = ['Gaby', 'Amy', 'Iyad', 4]; //any is more flexible.
let bools1: boolean[] = [true, false, false];

//tuples
let testTuple1: [string, number, boolean] = ['Erin', 30, true]; //needs to match types and length of tuple.

enum DoorStates {
    Open,
    Closed,
    SlightlyAjar
}
//if you hover, you'll see TS assigns numbers to each. DoorStates.Open = 0, etc.
console.log(DoorStates.Open);
//fyi, being able to use console.xx must be new with ES6 ... 
//the prof's intro classes (pre-ES6) show errors trying to use it directly.

function log(val: any) { //like a "void" method; nothing expected to be returned
    console.log(val);
}
log(DoorStates.Open); //0
log(DoorStates[0]); //"Open"

//tsc name-of-script.ts  --> will transpile to js, found directly "inside" this file in tree.

function tellJoke(): string { //will return a string
    return 'This is a very funny joke. Please laugh.';
}

tellJoke();

//in addition to not declaring a return type like in our log function, you can instead type:
function sayNothing(): void {
    //no return statement needed
}

//lesson 25: advanced types

//union types: allow multiple types to populate the variable, using pipe symbol to define them.

var unionType1: string | number;
unionType1 = 'Moo';
unionType1 = 4;
//unionType1 = true; //give an error cuz bool isn't part of the union.

var unionType2: string | number | boolean;
unionType2 = 'Boo';
unionType2 = 5;
unionType2 = true;

//type guards: applies strong typing rules to makes sure we don't mix and match types.

function addWithUnion(arg1: string | number, arg2: string | number) {
    //return arg1 + arg2;
    //TS types prevent that, because adding 3 + Gaby doesn't make any sense! 
}

function addWithTypeGuard(arg1: string | number, arg2: string | number): string | number { //string | number means return either/both of those types. (union)
    if (typeof arg1 === "string") {
        console.log('First arg is a string.');
        return arg1 + arg2;
    }
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        console.log('Both args are numbers.');
        return arg1 + arg2;
    }
    return arg1.toString() + arg2.toString();
}
//what's going on there?
//first, either arg can be a string or a number. (unions)
//the two if statements are "type guards"
//this lesson should make sense, but it doesn't...
//maybe the prof just didn't write every possible permutation, just showed three examples.

//type aliases: create a special name for a special type. like naming a long union with a short name.
//"type" is a keyword.

type StringOrNumOrBool = string | number | boolean;

function addWithAlias(arg1: StringOrNumOrBool, arg2: StringOrNumOrBool, arg3: StringOrNumOrBool) {
    return arg1.toString() + arg2.toString() + arg3.toString();
}

//null and undefined:
//when TS/JS knows a variable has been declared, but not identified.

function testUndefined(test: null | number) { //unions can include null
    console.log(`Test parameter: + ${test}`);
}

//testUndefined(); //TS prevents this, but JS allows it, reporting the value is undefined.
    //note it doesn't become "null"
testUndefined(null); //TS allows this, and JS reports it is null.