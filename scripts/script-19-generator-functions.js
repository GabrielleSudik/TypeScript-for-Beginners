//19: generator functions

function* myFunction(i){
    yield i; 
    yield i+5;
}

var gen = myFunction(3);

console.log(gen);
//check the log for this:
//you see "suspended" plus some Generator statuses.

//so to make it really work:
console.log(gen.next());
//console will print value: 3 and done: false.
//only the first yield did something

//if you do it again:
console.log(gen.next());
//value: 8 and done: false
//this time the second yield did something.