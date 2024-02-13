function sayHi(){
    console.log("Hi Vikash");
}
sayHi();

// Using name input

function sayHello(name){
    console.log("Hi", name);
}
sayHello("Nanna");

// However instead of this, use this for accessing variables in printing statements

function sayHai(name){
    console.log(`Hi ${name} How are you ?`);
}
sayHai("Nanna");

// Using return statements

function sayHiii(name){
    return "Hi, How are you ?";
}

var output = sayHiii();
console.log(output);

// or

console.log(sayHiii());


//Self executing anonymous functions

(function () {
    console.log("Hello India");
}) ();