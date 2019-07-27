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
console.log(person.has('name1')); //prints true
console.log(person.keys()); //keys method reveals all the keys (name, name1, etc)

person.forEach(function (person) {
    console.log(person)
})
//iterates over all values

let person3 = new Map([
    [gaby],
    [new Date(), 'today']
]);

console.log(person3); //reveals an array of two objects.
    //the first is key gaby's 3 elements; value is undefined
    //the second is key a date; value is 'today'

//IOW, Maps are pretty flexible in terms of their content.