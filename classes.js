class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    courseList = [];
    
    getInfo(){
        return { name: this.name, email : this.email}
    }

    //this getInfo is a function ( Also can be called as a Method)

    enrollCourse(name){
        this.courseList.push(name)
    }
    getCourseList(){
        return this.courseList;
    }
}

const vikash = new User("Vik","xyz@gmail.com")
console.log(vikash.getInfo());

vikash.enrollCourse("ReactJS");
vikash.enrollCourse("VueJS");

console.log(vikash.getCourseList());

Module.exports = User;

// Now, we can use this class in different js files

/* syntax
import User from "./classes.js" ;*/

//OR

//const user = require("./classes.js");