/* The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under
a single variable name, and has members for performing common array operations.*/

//JavaScript arrays are resizable and can contain a mix of different data types.

var countries = ["India","Russia","Japan","Singapore"];
var states = new Array("TN","KA","KL","RJ");

console.log(states[0]);

// Use . for accesing the methods in array
console.log(states.length);

//states.pop deletes the last element in the array

console.log(states.indexOf("KL"));

//To convert anything into an array
console.log(Array.from("Vikash"));

//Arrow functions

var isEven = (element) =>{
    return element%2 === 0;
};
console.log(isEven(1502));


var result = [2,4,6,8,10].every(isEven);
console.log(result);

//Callback functions

var result = [2,4,6,8,10].every((e) => (e%2===0));
console.log(result);

//if we don't use return keyword, {} is not used

//fill function

/*The fill() method of Array instances changes all elements within a range of indices in an array to a static value.
It returns the modified array.*/

const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]


//The filter() method creates a new array filled with elements that pass a test provided by a function.

const array2 = [1, 2, 3, 4];
const results = array2.filter((num) => num!=4 );
console.log(results);

//slice

/*The slice() method returns selected elements in an array, as a new array. The slice() method selects from a given start,
 up to a (not inclusive) given end. The slice() method does not change the original array.*/

 const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

 console.log(animals.slice(2));
 // Expected output: Array ["camel", "duck", "elephant"]
 
 console.log(animals.slice(2, 4));
 // Expected output: Array ["camel", "duck"]
 
 console.log(animals.slice(1, 5));
 // Expected output: Array ["bison", "camel", "duck", "elephant"]
 
 console.log(animals.slice(-2));
 // Expected output: Array ["duck", "elephant"]
 
 console.log(animals.slice(2, -1));
 // Expected output: Array ["camel", "duck"]
 
 console.log(animals.slice());
 // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


 //splice

 /*The JavaScript array splice() method is used to add/remove the elements to/from the existing array.
  It returns the removed elements from an array. The splice() method also modifies the original array. */

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
