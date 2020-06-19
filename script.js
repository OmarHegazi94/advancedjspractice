//  Function Constructor

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function() {
    console.log(2020 - this.yearOfBirth)
};

Person.prototype.lastName = 'Smith';


var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1890, 'designer');
var mark = new Person('Mark', 1999, 'Retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.__proto__)
console.log(jane.lastName)
console.log(mark.lastName)

console.log(john.hasOwnProperty('job'))
console.log(john.hasOwnProperty('lastName'))
console.log(john instanceof Person)
console.info(john)