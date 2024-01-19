tipper("80");

function tipper(a){ // this is a function

    var bill = parseInt(a); // converts the string into actual numbers
    console.log(bill+5);

}

/*We can run this without error because GEC scans the entire code
and make functions available even if there are declared later*/



var bigTipper = function(a){ // this is a variable

    var bill = parseInt(a); // converts the string into actual numbers
    console.log(bill+15);

}

// so, function call should come after the variable declaration

bigTipper("500");


/* JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions,
 variables, classes, or imports to the top of their scope, prior to execution of the code.*/
 
 