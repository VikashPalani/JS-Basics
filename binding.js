// Bind

const hp = {
    firstName : "Harry",
    lastName: "Potter",
    role : "admin",
    courseCount : 4,
    getInfo: function(){
        console.log(`
            First name is ${this.firstName}
            Last name is ${this.lastName}
            His role is ${this.role}
            aand he is studying ${this.courseCount} courses
        `);
    },
};

const dj = {
    firstName : "Harry",
    lastName: "Potter",
    role : "admin",
    courseCount : 4,
};

hp.getInfo.bind(dj);

// Bind always gives a reference back

/* So, use this -> hp.getInfo.bind(dj)();

or

var djInfo = hp.getInfo.bind(dj);
djInfo();

or 

hp.getInfo.call(dj);
*/r