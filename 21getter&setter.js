class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    #courseList = [];
    //#courseList indicates that it is a private variable
    
    getInfo(){
        return { name: this.name, email : this.email}
    }

    //this getInfo is a function ( Also can be called as a Method)

    enrollCourse(name){
        this.#courseList.push(name)
    }
    getCourseList(){
        return this.#courseList;
    }
}

const vikash = new User("Vik","xyz@gmail.com")
console.log(vikash.getInfo());

vikash.enrollCourse("ReactJS");
vikash.enrollCourse("VueJS");

console.log(vikash.getCourseList());

Module.exports = User;

//Now, to understand the usage of getter and setter

const rock = new User("rock","rock@gmail.com");
console.log(rock.getInfo());
rock.enrollCourse("ReactJS");

console.log(rock.getCourseList());
console.log(rock.CourseList);

// Now, console.log(rock.getCourseList()); this will return the output but the other statement wont.



