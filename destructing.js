//The destructuring syntax is a JavaScript expression that makes it possible to unpack values from arrays,
// or properties from objects, into distinct variables.


//Using ARRAYS
const word = ["one", "two", "three"];

const [red, yellow, green] = word;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"


//Using OBJECTS
const user = {
    id: 42,
    isVerified: true,
  };
  
  const { id, isVerified } = user;
  
  console.log(id); // 42
  console.log(isVerified); // true