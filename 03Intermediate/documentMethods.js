//The setInterval() method, offered on the Window and WorkerGlobalScope interfaces, repeatedly calls a function
//or executes a code snippet, with a fixed time delay between each call.

// Syntax: setInterval(code, delay)


var counter = document.querySelector(".counter");
var counter = document.querySelector(".followers");

let count = 1;

setInterval(() => {
  if (count<1000) {
    count++;
    counter.innerText = count;
  }
},10);


//The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
// Syntax: setTimeout(code, delay)

setTimeout(() => {
  followers.innerText = "Followers in Instagram";
}, 5000);


/*The getElementById() method of the Document interface returns an Element object representing the element
whose id property matches the specified string.  getElementById() is only available as a method of the global document object,
 and not available as a method on all element objects in the DOM. */


 /* EXAMPLES 

<html lang="en">
  <head>
    <title>getElementById example</title>
  </head>
  <body>
    <p id="para">Some text here</p>
    <button onclick="changeColor('blue');">blue</button>
    <button onclick="changeColor('red');">red</button>
  </body>
</html>

JS:

function changeColor(newColor) {
  const elem = document.getElementById("para");
  elem.style.color = newColor;
}

*/

/* Similarly, we have 

getElementById()
getElementsByClassName()
getElementsByName()
getElementsByTagName()
getElementsByTagNameNS()

*/


/* The Document method querySelector() returns the first Element within the document that matches the specified selector,
or group of selectors. If no matches are found, null is returned.


Example:
const el = document.querySelector(".myclass");

*/