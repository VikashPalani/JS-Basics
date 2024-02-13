const one = () =>{
    return "I'm One";
};

const two = () =>{
    setTimeout(() => {
      return "I'm Two";  
    }, 3000);

    console.log("I'm Two");
};


const three = () =>{
    return "I'm Three";
};

const callMe = () => {
    let valOne = one();
    console.log(valOne);

    let valTwo = two();
    console.log(valTwo);

    let valThree = three();
    console.log(valThree);
}; 

callMe();

/*

expected Output:

I'm One
Undefined
I'm Three

But if we include async in the arrow function,

const two = async () =>{
    setTimeout(() => {
      return "I'm Two";  
    }, 3000);

    console.log("I'm Two");
};

We will get the output as,

I'm One
Promise {Undefined}
I'm Three */ 


//Now, let's implement the promise from beginning


const ones = () =>{
    return "I'm One";
};

const twos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I'm Two")
        }, 3000);
    })
}

const threes = () =>{
    return "I'm Three";
};

const callMee = async() => {
    let valOnes = ones();
    console.log(valOnes);

    let valTwos = await twos();
    console.log(valTwos);

    let valThrees = threes();
    console.log(valThrees);
}; 

callMee();

/* Output

I'm One
I'm Two
I'm Three

*/

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. ( So it is Resolved or Rejected)
