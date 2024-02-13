/*In JavaScript, the event loop is a fundamental mechanism that enables the asynchronous execution of code.
It’s an essential part of the JavaScript runtime environment, allowing the language to handle non-blocking operations efficiently.

The event loop is responsible for managing the execution of code, handling events, and maintaining the flow of control.*/

const one = () =>{
    console.log("I'm One");
};

const two = () =>{
    setTimeout(() => {
      console.log("3sec over");  
    }, 3000);

    console.log("I'm Two");
};

const three = () =>{
    console.log("I'm Three");
};

one();
two();
three();


/* Before the 3 seconds get over, all the three functions will be executed,
i.e. the order is not followed. */
