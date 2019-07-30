//arrow function syntax
//new in ECMA 6
//they are shorter than regular functions
//best for non-method functions
//can't be constructors

//first a regular function:
var person = function(person){
    console.log(person);
}

person('Amy'); //logs Amy on the console.

//shorter version with arrow function:
var person = (person) => {
    console.log(person);
}

//shorter still:
var person = (person) => console.log(person);

//and if there is only one parameter:
var person = person => console.log(person);

//I assume multiple parameters need the (parens) in the second party there.

//let's do one with no parameters:
var a = () => { console.log('Arrow function works.')};

a(); //logs "arrow function works"