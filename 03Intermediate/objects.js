/*An object is a collection of properties, and a property is an association between a name (or key) and a value.
 A property's value can be a function, in which case the property is known as a method. */

var user = {
    name : "Vikash",
    role : "student",
    rollno : 9,
    facebookSignedIn : true,
    courseList : [],

    buycourse : function(courseName){
        this.courseList.push(courseName);
    },

    getCourseCount : function(){
        return `${this.name} is enrolled in total of ${this.courseList.length} courses`;
    },
};

console.log((user.name));
console.log(user.getCourseCount);
user.buycourse("React JS");
user.buycourse("Vue JS");

console.log(user.getCourseCount);