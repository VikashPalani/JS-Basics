var names = "Vikash";
console.log("Line 2 ", names);

function sayName(){
    var names = "Mr V";
    console.log("Line 6", names);
    sayNameTwo();

    function sayNameTwo(){
        console.log("Line 10", name);
    }
}


/* Output:

line 2, Vikash
line 6, Mr V
line 10, Mr V

For this concept remember Ice cream analogy*/

/* Scope chaining refers to the way a programming language looks for a variable or function when it's referenced in your code.
Imagine you have nested functions or blocks of code inside each other. The scope is like a set of rules that determines where the
language should search for a particular variable or function.

In simple terms, when you ask for a variable or function, the language starts by checking the innermost scope (the current block or function).
If it doesn't find what you're looking for there, it moves outward to the next outer scope and continues this process
until it either finds the desired item or reaches the outermost scope.*/