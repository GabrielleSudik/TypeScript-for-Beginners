import { pseudoRandomBytes } from "crypto";

//maps data structure

let gaby = ['Gaby', 44, 'programmer'];
let iyad = ['Iyad', 36, 'student'];
let amy = ['Amy', 34, 'aspiring'];

let person = new Map();

person.set('name', 'Gaby');
console.log(person);
//prints key-value of name-Gaby

person.set('name1', 'Iyad');
console.log(person);
//now prints an array of 2 persons: name-Gaby and name2-Iyad

let person2 = new Map();

person2.set(function print() {
    console.log('Howdy');
}, 'Gaby');

console.log(person2);
//the key will be the function, including its name ("print") and how many args it takes
//value will be Gaby
//why would one do this?

//to print just the value:
console.log(person.get('name')); //prints only Gaby
//note TS doesn't recognize person.name directly. you need "get" to help out.