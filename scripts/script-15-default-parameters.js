//default parameters
//new in ECMA 6

function add(x=5, y=4){
    console.log(x+y);
}

add(2, 1); //prints 3

add(); //prints 9

function role(name = 'admin', hobby = 'programming'){
    console.log(`The name is: ${name}.
                The hobby is ${hobby}.`);
}

add('Gaby'); //prints Gaby, Programming
//how to only get the default first parameter?
//teacher doesn't say.  :\

