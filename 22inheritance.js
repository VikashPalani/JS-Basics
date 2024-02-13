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

    static login(){ //static is used to incidate private. This property can't be inherited.
        return "You are logged In";
    }
}

class SubAdmin extends User{
    constructor(name,email){
        super(name,email);
    }

    getAdminInfo(){
        return "I'm Subadmin";
    }

    login(){ // Method overwriting. Here this method is used instead of the login() in user class.
        return "Logged in as Subadmin";
    }
}

const vikash = new User("Vik","xyz@gmail.com")
//console.log(vikash.getInfo());

vikash.enrollCourse("ReactJS");
vikash.enrollCourse("VueJS");

//console.log(vikash.getCourseList());


const tom = new SubAdmin("tom","tom@gmail.com");
console.log(tom.getAdminInfo());


console.log(tom.getInfo());
console.log(tom.login());