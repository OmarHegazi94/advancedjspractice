//  Function Constructor

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// };

// Person.prototype.calculateAge = function() {
//     console.log(2020 - this.yearOfBirth)
// };

// Person.prototype.lastName = 'Smith';


// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1890, 'designer');
// var mark = new Person('Mark', 1999, 'Retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.__proto__)
// console.log(jane.lastName)
// console.log(mark.lastName)

// console.log(john.hasOwnProperty('job'))
// console.log(john.hasOwnProperty('lastName'))
// console.log(john instanceof Person)
// console.info(john)



// Object.create

// var personProto = {
//     calculateAge: function() {
//         console.log(2020 - this.yearOfBirth);
//     }
// };

// var john = Object.create(personProto);

// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto, {
//     name: { value: 'Jane' },
//     yearOfBirth: { value: 1987},
//     job: { value: 'designer'}
// });


// Primitives vs Objects

// var a = 23;
// var b = a;

// a = 46;

// console.log(a, b)


// // Objects
// var obj1 = {
//     name: 'John',
//     age: 26
// };

// var obj2 = obj1;

// obj1.age = 30;

// console.log(obj1)
// console.log(obj2)

// // Functions
// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// };

// function change(a, b) {
//     a = 30;
//     b.city = 'San Francisco'
// };

// change(age, obj)

// console.log(age)
// console.log(obj.city)


// Passing functions as arguments


var years = [1994, 1343, 1334, 2000, 2015];

function arrayClac(arr, fn) {
    var arrRes = [];

    for(var i = 0; i< arr.length; i++){
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calculateAge(el) {
    return 2020 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if(el >= 18 && el <= 21){
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1
    }
}

var ages = arrayClac(years, calculateAge);
var fullages = arrayClac(ages, isFullAge);
var rates = arrayClac(ages, maxHeartRate);

console.log(ages);
console.log(fullages);
console.log(rates);