//spread operator

let gaby = ['Gaby', 44, 'programmer'];
let iyad = ['Iyad', 36, 'student'];

let person = [gaby, 'Amy', 34, 'aspiring', iyad];

console.log(person);
//this will log an array, which you can open to see Gaby's 3 things,
//then Amy's 3 things directly.
//then another array, which you can open to see Iyad's 3 things

//instead...
let person2 = [...gaby, 'Amy', 34, 'aspiring', ...iyad];

console.log(person2);
//will log as 9 things directly.