//lessons 27+ functions:

//example that doesn't say what value should be returned:
function addNumbers1(a: number, b: number) {
    return a + b;
}

//example that does:
//note you have to tweak the arguments to make the return be what you need
function addNumbers2(a: number, b: number): string {
    //return a + b; //would be a number, not a string
    //return a.toString() + b.toString(); //returns string OR...
    return (a + b).toString(); //also returns a string
    //NOTE: those two strings are not the same. so make the code do what you need. (add or interpolate, eg)
}

//anonymous functions:
//defined on the fly, don't have names.

//the following function has no name, just a definition.
//the "var" is not the function's name, just the box that holds the function.
var addString1 = function (a: string, b: string) {
    return a + b;
}
//TS knows to return a string because the items on the other side of the equation (the args) are strings.

console.log(addString1('Gaby', 'Sudik')); //GabySudik

//optional parameter: add a ?
var addString2 = function (a: string, b?: string) {
    return a + b;
}

console.log(addString2('Gaby')); //Gaby. no errors due to "missing"/optional parameter

//you can have as many optional params as you want, but they must be at the end of the list.
//not sure how to handle, say, 3 optionals 
//but you want to skip the first of the three and pass args to the other two. /shrug

//default and rest parameters:
//you know default.
//"rest" parameters as in "and the rest of the things..."

function buildName(firstName: string, lastName: string = "Mirren") { //the default value for lastName
    return firstName + " " + lastName;
}

console.log(buildName('Helen')); //Helen Mirren

function buildPerson(firstName: string, ...remainingNames: string[]) { //remainingNames shows the rest syntax.
    return firstName + " greets " + remainingNames.join(" ");
}

//let personOne = buildPerson(firstName: 'Lesley', remainingNames: 'John', 'Ringo', 'George');

//console.log(personOne);

//using the names of the parameters in the call just isn't working like in the video.
//I get VS error messages.
//deleting them allows for transpiling. but the call doesn't work. :\