//arrow functions and "this" scope

var person = {
    name: 'Erin',
    hobbies: ['writing', 'reading', 'pilates'],
    printHobbies: function(){
        var _this = this;
        this.hobbies.forEach(function (hobby){
            var str = _this.name + " likes " + hobby;
            console.log(str);
        }.bind(this))
    }
};
//see the internal references in printHobbies by using "this"?
//this.hobbies is enough
//but this.name within the function doesn't work.
//instead:
//1. var _this = this;
//2. _this.name
//no idea why it has to be this way.
//or:
//1. this.name
//2. .bind(this)
//or:
//make it an arrow function, like below:

var person = {
    name: 'Erin',
    hobbies: ['writing', 'reading', 'pilates'],
    printHobbies(){
        this.hobbies.forEach((hobby) => {
            var str = this.name + " likes " + hobby;
            console.log(str);
        })
    }
};


person.printHobbies();

//the point is: there are multiple ways of handling this.thing
//when used in a function inside an object
//three ways outlined above, including arrow functions
//instead of regular functions.