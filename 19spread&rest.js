//spread operator
function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  // Expected output: 6


//rest operator
function sum(...Args) {
    let total = 0;
    for (const arg of Args) {
      total += arg;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3));
  // Expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // Expected output: 10

//here log(args) gives [1,2,3] and [1,2,3,4] respectively.

// In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements,
// while rest syntax collects multiple elements and "condenses" them into a single element.