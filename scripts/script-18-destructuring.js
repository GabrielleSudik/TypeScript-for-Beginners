//18: destructuring

//you already know:
var programming = ['java', 'C#', 'python', 'COBOL', 'BASIC'];
console.log(programming[0]); //prints java

//this is destructuring
var [ first, second, , fourth ] = ['apple', 'banana', 'orange', 'kiwi'];
console.log(first); //prints apple
console.log(second); //prints banana
console.log(fourth); //prints kiwi
//what's all this then?
//instead of referencing each element with its array position like fruit[0]
//you name each position as a variable, which is associated with something in the array
//note the syntax of skipping orange with , ,
//you can also skip the first with a starting ,

//this is useful for arrays and objects.
//you can create your own variable names
//like if you want to match variable names to object elements
//firstName, lastName, age, etc.