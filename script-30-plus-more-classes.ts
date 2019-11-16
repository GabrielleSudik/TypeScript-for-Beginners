//30+ classes, interfaces, inheritance
//review lesson 20 for anything new in ES6.

//TS is OOP, this should all look familiar to you.
//JS isn't really, but it gets transpiled alright.

//Interfaces:

//defines what properties and methods an object MUST implement
//it's a way to define a custom type.
//it allows for defining variables based on your own definitions
//like how "string" must follow certain rules,
//your custom types must follow certain rules.
//interfaces can contain functions as well as properties.

interface IComplexType1 {
    id: number;
    name: string;
}

let complexType1: IComplexType1 = { id: 1, name: 'Sean' };
//nice, a lightbulb turned on. interfaces are just types you create yourself.
//like any other type, your variable value(s) must match the type.

//interfaces may include optional properties with ? 
//like optional parameters.

interface IComplexType2 {
    id: number;
    name?: string; //optional
}

let complexType2: IComplexType2 = { id: 2 }; //name not needed, because it's optional.

//something interesting:
//when you compile the ts to js (with "tsc script-30...")
//the JS will not show the code creating the interface.
//but apparently the JS knows about it, which you'll see if
//you hover on the variable names in the JS file.

//read-only properties:
//what if you don't want ssn to change?
interface IComplexType3 {
    id: number;
    name: string;
    readonly ssn: number;
}

let complexType3: IComplexType3 = { id: 3, name: 'Erin', ssn: 123456789 };
//complexType3.ssn = 987654321; //error because readonly can't change.
console.log(complexType3); //prints 123456789

//const vs readonly: 
//use const on a variable.
//use readonly on a property.

//Classes:

class simpleClass1 {
    id: number;

    print(): void {
        console.log(`simpleClass1.print() called.
            Id: ${this.id}.`); //THIS is needed.
    }
}

let mySimpleClass = new simpleClass1();

//to access properties of a class within an instance of the class, we need the
//THIS keyword

mySimpleClass.id = 34;
mySimpleClass.print();

//Interfaces in Classes:

//imagine you have two classes that do something similar, like a print function.

class ClassA {
    print() {
        console.log(`ClassA.print() is happening.`);
    }
}

class ClassB {
    print() {
        console.log(`ClassB.print() is happening.`);
    }
}

//this is a good time to use interfaces in the classes:

//your custom variable, it contains only a function named "print()"
interface IPrint {
    print();
}

//because this next function needs a variable type of IPrint,
//you can only pass in objects that also have a print() function
function printClass(a: IPrint) {
    a.print();
}

class ClassC implements IPrint {
    print() {
        console.log(`ClassC.print() is happening.`);
    }
}

class ClassD implements IPrint{
    print() {
        console.log(`ClassD.print() is happening.`);
    }
}

let classC = new ClassC();
classC.print();
let classD = new ClassD();
classD.print();

//ok I follow the logic, but I don't know WHY this would be used.
//seems like the class that needs to print() like classD.print()
//doesn't get an extra benefit by also implementing the interface.
//where is the code reduction or reusability? :\


//class constructor function (see lesson 20 too)

class ClassWithConstructor {
    id: number;
    name: string;

    //here's the constructor function.
    //constructor is a keyword.
    constructor(_id: number, _name: string) {
        this.id = _id;
        this.name = _name;
    }

    getName(): string {
        return this.name;
    }
}

let classWithC = new ClassWithConstructor(4, 'Amy');
//note you can't just create a new ClassWithConstructor() (empty) 
//because that class's constructor expects some data.

//fyi, like in other lessons, prof wants to identify each argument more specifically
//but you get error messages when you do what. which I think is weird, but ok...
//let classWithC = new ClassWithConstructor(_id: 4, _name: 'Amy');

classWithC.getName();
console.log(classWithC.name); //Amy

//class modifiers and static keyword

//ie, public, private, protected

class ClassWithPublicProperty {
    public id: number; //IF this was "private" you couldn't set "id" outside the class.
    readonly name: string;
}

let publicAccess = new ClassWithPublicProperty();
publicAccess.id = 45; //IF the property was private, you'd get an error here.
//publicAccess.name = 'Bob'; //can't be assigned because it's readonly
console.log(publicAccess.name); //no error because you're reading it.

class ClassWithAutomaticProperties {
    constructor(public id: number, private name: string) { }
}

let myAutoClass = new ClassWithAutomaticProperties(5, 'Iyad');
console.log(`myAutoclass is: ${myAutoClass.id}.`); //accessible because public.
//console.log(`myAutoclass name is: ${myAutoClass.name}.`); //not accessible because not public.

//accessors: (ie, getting and setting properties of a class)
//allow for, well, getting and setting properties outside the class.

class ClassWithPrivateProperties {
    private _id: number; 
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    private _hobby: string;
    public get hobby(): string {
        return this._hobby;
    }
    public set hobby(value: string) {
        this._hobby = value;
    }

    //hey hey! highlight the whole row of the property
    //and intellisense will give the option to create Gs and Ss.

    //static functions and properties
    //can be called; you don't have to create instances of the class first.
    static _job: string;

    static printData(): void {
        console.log(this._job);
        //console.log(this._name); //error because _name needs an instance
    }
    //note: the static function can work with a static property
    //because printData runs without instances of the class
    //can only handle properties that are also at the class level, not instances.
}

let classWithPrivateProperties = new ClassWithPrivateProperties();
classWithPrivateProperties.name = 'Tom';
console.log(classWithPrivateProperties.name); //Tom. 
    //Because you first "set" the property as Tom, then "get"'d it to print.
    //I still don't know how this is inherently safer than allowing public properties
    //except when it's, say, get only.

//static example (along with code above):
ClassWithPrivateProperties._job = 'developer';
console.log(ClassWithPrivateProperties._job); //developer
//notice how you didn't have to create an instance of the class.
//the value of the property applies to the class itself.
//note also the name passed is Class.property, not instanceOfClass.property.

ClassWithPrivateProperties.printData(); //static functions work the same way.

//fyi, your transpiling threw errors on all the get and set.
//only available when targeting ES5 and higher. hmm.

//inheritance

interface IBase {
    id: number;
}

interface IDerivedFromBase extends IBase {
    name: string;
}

class InterfaceInheritance implements IDerivedFromBase {
    id: number;
    name: string;
    //you'll get an error when you first create the class.
    //solved by adding whatever properties are in the things you inherit.
    //again, I wonder what's the point.
}

//example with extending methods:
//a new class, an old interface:
class BaseClass2 implements IBase {
    id: number;
}

//a second new class, with an old interface:
class DerivedFromBaseClass2 extends BaseClass2 implements IDerivedFromBase {
    name: string;
    //it appears:
    //"extending" a class automatically brings in those properties/methods
    //"implementing" an interface still required you type them here too.
}

//TS does not support multiple inheritance
//a class can inherit only one other class.
//you can chain extend, though.
//You CAN implement multiple interfaces, though.

//when a base class has a constructor, 
//the extending class will need to call it, passing args.
//called "constructor overloading"
//keyword: "super"

class BaseClassWithConstructor {
    private id: number;
    constructor(_id: number) {
        this.id = _id
    }
}

class Class3 extends BaseClassWithConstructor {
    private name: string;
    constructor(_id: number, _name: string) {
        super(_id); //calls the base class constructor.
        this.name = _name;
    }
}

//protected class members:
//when using inheritance, it allows both the base
//and the derived class to use a thing.
//private protects a thing even from derived classes.

class ClassUsingProtected {
    protected id: number;

    public getId() {
        return this.id;
    }
}

class DerivedFromProtected extends ClassUsingProtected {
    constructor() {
        super();
        this.id = 5;
    }
}

var derivedFromProtected = new DerivedFromProtected();
//derivedFromProtected.id = 1; //gets an error, presumably because it's protected.
console.log(derivedFromProtected.getId());

//abstract classes
//a class that can't be instantiated
//only derived from.
//allow for code use among other related classes.

//here are two very similar classes:
class Employee {
    public id: number;
    public name: string;

    printDetails() {
        console.log(this.id + this.name);
    }
}

class Manager {
    public id: number;
    public name: string;
    public employee: Employee[]

    printDetails() {
        console.log(this.id + this.name + this.employee.length);
    }
}

//instead use an abstract to include commonalities:
abstract class AbstractEmployee {
    public id: number;
    public name: string;
    abstract getDetails(): string; //it doesn't do anything, you just define it.
    printDetails() {
        console.log(this.getDetails());
    }
    //printDetails will always work in inheriting classes
    //getDetails is only vaguely defined.
}

class NewEmployee extends AbstractEmployee {
    getDetails(): string {
        return this.id + this.name;
    }
    //getDetails is more clearly defined.
    //will pass this version to printDetails when needed.
}

class NewManager extends NewEmployee {
    public employees: NewEmployee[];
    getDetails(): string {
        return super.getDetails() + this.employees.length;
    }
    //getDetails both relies on the earlier getDetails and elaborates.
}

let employee = new NewEmployee();
employee.id = 1;
employee.name = 'Gina';
employee.printDetails();
//because employee is a NewEmployee, it will do THAT version of getDetails.

let manager = new NewManager();
manager.id = 1;
manager.name = 'Brian';
manager.employees = new Array();
manager.printDetails();
//uses the NewManager version of getDetails.
//that version also relies on the super for NewEmployee getDetails().
//the employees array will print 0 (because nothing in it)

//you can see how this can save a lot of coding if you have a lot of related/linked classes.

