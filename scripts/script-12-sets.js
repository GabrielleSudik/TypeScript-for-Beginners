//sets

let numberSet = [1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9];
let numSet = new Set(numberSet);
console.log(numSet);  //prints 9 elements. does not print the duplicates.

let person = new Set();
person.add('Sean');
person.add('Erin');
person.add('Sean');
console.log(person); //prints only Sean and Erin in an array
console.log(person.has('Sean')); //true
console.log(person.size); //2 (second Sean is ignored)

person.add('Gaby');
person.delete('Sean');
console.log(person); //prints only Gaby and Erin

person.forEach(function (e) {
    console.log(e);
});
//prints Erin and Gaby separately



person.clear();
console.log(person); //shows Array(0)