//A for loop repeats until a specified condition evaluates to false.

var states = ["Tamil Nadu", "Kerala", "Andhra Pradesh","Goa"];

for (let index = 0; index < states.length; index++) {
    console.log(states[index]);
}

// A while statement executes its statements as long as a specified condition evaluates to true

let j = 0;

while(j<states.length){
    console.log(states[j]);
    j++;
}

/* The do...while statement repeats until a specified condition evaluates to false.
NOTE :- statement is always executed once before the condition is checked.*/

let i = 20;

do {
    console.log(i);
    i++;
} while(i < 10);


//The forEach() method of Array instances executes a provided function once for each array element.

const array1 = ['a', 'b', 'c'];
array1.forEach((element) => console.log(element));




// For in and For of 

/*The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.

For....of is majorly used for Array*/

const array2 = ['a', 'b', 'c'];

for (const element of array2) {
  console.log(element);
}

// Expected Output:
/*

"a"
"b"
"c"

*/

/* The for...in statement iterates over all enumerable string properties of an object
For....in is majorly used for object*/

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"