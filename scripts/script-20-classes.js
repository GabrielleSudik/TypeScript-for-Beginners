//20: classes

//you could fake a constructor:
function rectangle(width, height){
    this.width = width;
    this.height = height;
}

//then check it out:
let rect = new rectangle(10,20);
console.log(rect); //you'll see the object
    //ie, width 10 and height 20

//instead let's make a class:
class person {
    constructor(name, age, job){
        this.name = name;
        this.age = age;
        this.job = job;
    }
    //you can have only 1 constructor per class
}

//create an instance of the class:
let amy = new person('Amy', 35, 'programmer');
console.log(amy); //will print the object

//class inheritance:
class student extends person {
    constructor(school, grade){
        super('Gaby', 44, 'programmer');
        //super is a keyword that references the parent class
        //in this case you explicity stated the three elements.
        //this will matter below
        //I wonder if you need to inherit all three items?
        //maybe try just bringing in two.
        this.school = school;
        this.grade = grade;
    }
}

//create an instance of the student class:
//you have to pass only two arguments because the other 3 are 
//explicity in the constructor
let gaby = new student('Tri-C', 'super senior');
console.log(gaby); //will print all 5 elements

//more class inheritance:
//in this example, your constructor takes the variables
//not the explicit elements like above.
class student2 extends person {
    constructor(name, age, job, school, grade){
        super(name, age, job);
        this.school = school;
        this.grade = grade;
    }
}

//create an instance of student2:
//unlike the last example, you have to pass in all 5 parameters)
let iyad = new student2('Iyad', 36, 'driver', 'Stark State', 'sophomore');
console.log(iyad); //will print the object with all 5

//getters and setters:
//and functions in the class:
class faculty extends person {
    constructor(name, age, job, school){
        super(name, age, job);
        this.school = school;
    }

    //they go outside the constructor:
    getName(){ return this.name }
    setName(name){ this.name = name }
    getAge(){ return this.age }
    setAge(age){ this.age = age }
    getJob(){ return this.job }
    setJob(job){ this.job = job }
    getSchool(){ return this.school }
    setSchool(school){ this.school = this.school }

    //in console, you can iyad.getName()
    //and get "Iyad"
    //if you iyad.setName('Ahmed')
    //and iyad.getName()
    //you get "Ahmed"

    //ie, getters and setters are just little functions
    //that only return information (get)
    //or change information (set)

    //a function:
    
}