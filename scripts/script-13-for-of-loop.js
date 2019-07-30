//for..of loop
//lessons 13 and 14.

let programming = 'javascript';

for(let x of programming){
    console.log(x); //singly prints each char in "javascript"
}

let fruits = ['apple', 'banana', 'orange', 'kiwi'];

for (let fruit of fruits){
    console.log(fruit);
}

let thingy = new Map();

thingy.set('HTML', 'Easy');
thingy.set('CSS', 'complicated');
thingy.set('C#', 'Hard');

for (let thing of thingy){
    console.log(thing); //will print each map object
}

for (let thing of thingy.keys()){
    console.log(thing); //will print just the the keys
}

for (let thing of thingy.values()){
    console.log(thing); //will print just the values
}

for (let thing of thingy.values()){
    console.log(thing); //will print just the values
}

for (let thing of thingy.entries()){
    console.log(thing); //returns the objects
}

//how about printing each fruit one letter at a time?
//nested loop!
for (let fruit of fruits){
    for (let letter of fruit){
        console.log(letter);
    }
}