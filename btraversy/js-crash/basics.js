// alert('Hello World');
// console.log('Hello World');
// console.error('This is an error!');
// console.warn('This is a warning!');

//var, let, const
/*
let age = 30;
const age = 30;
age = 31;
console.log(age);

const aname = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof aname)
console.log(typeof age)
console.log(typeof rating)
console.log(typeof isCool)
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)
*/

    // Strings 
/*
const aname = 'John';
const age = 30;
//Concantenation
console.log('My name is ' + aname + ' and I am ' + age);
// Template String
console.log(`My name is ${aname} and I am ${age}`);
const hello = `My name is ${aname} and I am ${age}`;
console.log(hello);

const s = 'Hello World!';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substr(0, 7));
console.log(s.substr(0, 7).toLowerCase());
console.log(s.split(''));

const s = 'Technology, Computers, IT, Code';
console.log(s.split(', '));
*/

//Arrays
/*
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['apples', 'bananas', 'pears', 10, true];
console.log(fruits);
console.log(fruits[1]);
fruits[5] = 'grapes';
console.log(fruits);
fruits[10] = 'peaches';
console.log(fruits);
console.log(fruits[9]);
fruits.push('mangos');
console.log(fruits);
fruits.unshift('strawberries');
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(Array.isArray('Hello'));
console.log(fruits.indexOf('bananas'));
*/

    // Object Literals 
/*
const person = {
  firstName: 'John',
  lastname: 'Doe',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '1, Main St',
    city: 'Chicago',
    state: 'IL'
  }
}

console.log(person);
// alert(person);
console.log(person.firstName, person.lastname);
console.log(person.hobbies[1]);
console.log(person.address.city);
// Destructuring  (pulling out variables from Objects)
const {firstName, lastname, address: {city, state} } = person;
console.log(firstName);
console.log(lastname);
console.log(city);
console.log(state);
const {first, last} = person;
console.log(first);
console.log(last);
person.email = 'john@doe.com';
console.log(person);
*/

/*
const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Dentist appt',
    isCompleted: false
  }
];


console.log(todos);
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

    For loop 
for(let i = 0; i <= 10; i++) {
  console.log(`For loop number ${i}`);
}
for(let i = 0; i < todos.length; i++) {
  console.log(`ToDo Text# ${i}`, todos[i].text);
}
for(let todo of todos) {
  console.log(todo.text);
}

    While loop 
let i = 0;
while(i <= 10) {
  console.log(`While loop number ${i}`);
  i++;
}

  //  High Order Array methods
  //  foreach, map, filter 
todos.forEach(todo => console.log(todo.text));


todos.forEach(function(todo) {
  console.log(todo.text);
});
const todoTexts = todos.map(function(todo) {
  return todo.text;
});
console.log(todoTexts);

const todoCompleted = todos.filter(function(todo) {
  return todo.isCompleted;
});
console.log(todoCompleted);

const todoCompletedTexts = todos.filter(function(todo) {
  return todo.isCompleted === true;
}).map(function(todo) {
  return todo.text;
});
console.log(todoCompletedTexts);
*/

    // Conditionals 
/*
const x = '10';
if(x === 10) {
  console.log('x is 10');
} else {
  console.log('x is NOT 10');
}
    
const x = 10;
const x = '10';
const x = 20;
if(x === 10) {
  console.log('x is 10');
} else if(x > 10) {
  console.log('x is greater than 10')
} else {
  console.log('x is less than 10');
}

const x = 4;
const y = 105;
if(x > 5 || y > 10) {
  console.log('x is more than 5 or y is more than 10');
}

const x = 6;
const y = 105;
if(x > 5 && y > 10) {
  console.log('x is more than 5 or y is more than 10');
}

terneray operator
const x = 11;
const color = x > 10 ? 'red' : 'blue';
console.log(color);

const color = 'green';
switch(color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue': 
    console.log('color is blue') ;
    break;
  default:
    console.log('color is NOT red or blue');
    break;
}
*/

    // Functions 
/*
function addNums(num1 = 1, num2 = 2) {
  return num1 + num2;
}
const addNums = (num1 = 1, num2 = 2) => {
  return num1 + num2;
}
const addNums = (num1 = 1, num2 = 2) => num1 + num2;
console.log(addNums());
const addNums = num1 => num1 + 5;

console.log(addNums(5, 4));
*/

    // Constructor Function 
/*
function Person(fname, lname, dob) {
  this.firstName = fname;
  this.lastName = lname;
  this.dob = new Date(dob);

  // this.getBirthYear = function() {
  //   return this.dob.getFullYear();
  // }
  // this.getFullName = function() {
  //   return `${this.firstName} ${this.lastName}`;
  // }
  // this.getFullName = () => `${this.firstName} ${this.lastName}`
}

Person.prototype.getBirthYear = function() {
  return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}


    // Class 
class Person {
  constructor(fName, lName, dob) {
    this.firstName = fName;
    this.lastName = lName;
    this.dob = new Date(dob);
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}


    // Instantiate the Object 
const person1 = new Person('John', 'Doe', '03-23-1980');
console.log(person1);
console.log(person1.dob);
console.log(person1.dob.getFullYear());

const person2 = new Person('Mary', 'Smith', '05-30-1970');
console.log(person2);
console.log(person2.getBirthYear());
console.log(person2.getFullName());

// DOM
console.log(window);
window.alert('ok');

*/


    // End of Code 