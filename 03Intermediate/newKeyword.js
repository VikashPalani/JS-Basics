/* The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types
that has a constructor function. */



// This is a style of creating objects through functional way

//EXAMPLE 1

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  const car1 = new Car('Eagle', 'Talon TSi', 1993);
  
  console.log(car1.make);
  // Expected output: "Eagle"


//EXAMPLE 2

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");

// .hasOwnProperty is used to check the presence of a property in order to reduce error statements

if(myFather.hasOwnProperty("age")){
    myFather.age();
}

// This prints the age of myFather only if age property exists.

//Prototype

/*We cannot add a new property to an existing object constructor like Person.nationality = "English";

In order to tackle this, we use prototype. The JavaScript prototype property allows you to add new properties to object constructors */

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
Person.prototype.nationality = "English";

  //OR
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};


