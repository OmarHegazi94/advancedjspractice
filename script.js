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


// var years = [1994, 1343, 1334, 2000, 2015];

// function arrayClac(arr, fn) {
//     var arrRes = [];

//     for(var i = 0; i< arr.length; i++){
//         arrRes.push(fn(arr[i]));
//     }

//     return arrRes;
// }

// function calculateAge(el) {
//     return 2020 - el;
// }

// function isFullAge(el) {
//     return el >= 18;
// }

// function maxHeartRate(el) {
//     if(el >= 18 && el <= 21){
//         return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1
//     }
// }

// var ages = arrayClac(years, calculateAge);
// var fullages = arrayClac(ages, isFullAge);
// var rates = arrayClac(ages, maxHeartRate);

// console.log(ages);
// console.log(fullages);
// console.log(rates);



// Functions returning functions

// function interviewQuestion(job) {
//     if(job === 'designer') {
//         return function(name){
//             console.log(name + ' Can you please explain what UX design is?')
//         }
//     } else if (job === 'teacher'){
//         return function(name = 'koko'){
//             // console.log('What subject do you teach ' + name + ' ?')
//             return function(field) {
//                 console.log('What subject do you teach ' + name + ' in the ' + field + ' bussiness ?')
//             }
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ' what do you do?')
//         }
//     }
// }

// // interview question will return anynomous function which then we will pass the name that's required for the anynoums function
// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer')


// teacherQuestion('John')
// designerQuestion('John')


// // Other way
// interviewQuestion('teacher')('Mark');

// // calling the function and passing params to the nested functions
// interviewQuestion('teacher')()('arabic');


// IIFE

// function game() {
//     var score = Math.random * 10;
//     console.log(score >= 5)
// }

// game();

// (function () {
//     var score = Math.random() * 10;
//     console.log(score >= 5)
// })();

// // console.log(score)


// (function (goodluck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodluck)
// })(5);



// Closures


// function retirement(retirementAge) {
//     var a = ' years left until retirment.'
//     return function (yearOfBirth) {
//         var age = 2020 - yearOfBirth;
//         console.log(retirementAge - age + a);
//     }
// }

// var USRetirement = retirement(66)(2005);
// var GermanyRetirement = retirement(65)(2000);
// var IclandRetirement = retirement(67)(1998);




// function interviewQuestion(job) {
//     var designerString = ' Can you please explain what UX design is?';
//     var teacherString = 'What subject do you teach ';
//     var randomString = ' what do you do?';

//     return function(name) {
//         if (job === 'designer') {
//             console.log(name + designerString)
//         } else if (job === 'teacher') {
//             console.log(teacherString + name + ' ?')
//         } else {
//             console.log('Hello ' + name + randomString)
//         }
//     }

// }


// interviewQuestion('teacher')('Mark')




// Bind, call and apply

var john = {
    name: 'John',
    age: 33,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! ' + ' I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if(style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay)
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};


john.presentation('formal', 'morning');

// Method Borrowing , first argument to set the this keyword for the object you want it to borrow the method
john.presentation.call(emily, 'friendly', 'after noon')


// same thing but the second argument is an array of argument
john.presentation.apply(emily, ['formal', 'afternoon']);



// Bind creates a copy of a function with a preset argument

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal')

emilyFormal('afternoooooon')









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

function isFullAge(limit, el) {
    return el >= limit;
}


var ages = arrayClac(years, calculateAge);


var fullJapan = arrayClac(ages, isFullAge.bind(this, 20));

console.log(ages)
console.log(fullJapan)