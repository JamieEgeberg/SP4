

var myObj = {
    name: "Jimbo",
    age: 24,
    height: 190,
    occupation: "student"
};

for (var prop in myObj) {
    console.log(prop, myObj[prop]);
}

delete myObj.occupation;
myObj.willpower = 8;

for (var prop in myObj) {
    console.log(prop, myObj[prop]);
}

function Person(firstname, lastname, age, height) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.height = height;
}


var p = new Person("Johnny", "Petersen", 35, 188);

console.log(p);
p.getInfo = function () {
    for (var prop in p) {
        console.log(prop, p[prop]);
    }
};
p.getInfo();