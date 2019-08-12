//template strings

let name = 'Iyad';

//the old way:
console.log('Hello, ' + name);

//the new way:
console.log(`Hello, ${name}.`);

//the old way:
function print(name, age){
    document.write("Name: " + name);
    document.write('<br>');
    document.write("Age: " + age);
    document.write('<br>');
}
print("Iyad", 36);

//the new way:
function print2(name, age){
    document.write(`Name: ${name}. <br>
        Age: ${age}. <br>`)
}
print2("Iyad", 36);