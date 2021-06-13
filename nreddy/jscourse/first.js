//console.log("Hello World!");

/* Objects


let alien = {
  aname:  'Madhu',
  tech:   'JS',
  'work exp': 4
}

console.log(alien, typeof alien);
console.log(alien.aname);
console.log(alien['tech']);
console.log(alien['work exp']);

let input = 'aname';
console.log(alien[input]);
*/

let alien = {
  aname:  'Madhu',
  tech:   'JS',
  laptop: {
      cpu: 'i7',
      ram: 4,
      brand: 'Asus',
  }
}
console.log(alien);
// console.log(alien.aname);
// console.log(alien['tech']);
// console.log(alien.laptop);
// console.log(alien.laptop.brand);
// console.log(alien.laptop?.brand?.length);

// delete alien.laptop;
console.log(alien);

for(let key in alien) {
  console.log(key, alien[key]);
}
for(let key in alien.laptop) {
  console.log(key, alien.laptop[key]);
}


/* While loop

let i = 1;
while(i <= 5) {
  console.log('Hi', i);
  i++;
}
console.log(i);

let num = 987654321;
while(num > 0) {
  console.log(num % 10);
  num = parseInt(num / 10);
}
*/

/*Do-While loop
let i = 10;
do {
  console.log('Hi', i);
  i--;
} while(i > 0);
*/

/*For loop
for(let i = 0; i < 10; i++) {
  console.log('Hi', i);
  for(let j=1; j < 5; j++) console.log('Hello', j);
}
//console.log('Hi', i);
*/

/* Switch Operator
//let day = 'Friday';
let day = 'Wednesday';
switch(day) {
  case 'Monday':
    time = '7am';
    break;
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
    time = '4am';
    break;
  case 'Friday':
    time = '9am';
    break;
  case 'Saturday':
  case 'Sunday':
    time = '8am';
    break;
  default: 
    time = "Invalid Input";
}
//Template Literal
console.log(`On ${day}, 
wakeup time is ${time}`)
*/


/* Ternery Operator
let num = 5;
let result

// if(num % 2 === 0)
//   result = "Even"
// else
//   result = "Odd"

result = num % 2 === 0 ? "Even" : "Odd"

console.log(result)
*/

/* If Else
let num1 = 1;
let num2 = 3;
let num3 = 2;
if(num1 > num2 && num1 > num3) 
  console.log("num1 is greatest");
else if(num2 > num1 && num2 > num3) {
  console.log('num2 is greatest');
  console.log("num1 is lesser");
} else   console.log("num3 is greatest");

console.log("Bye...")
*/

/* Logical Operators 
let x = 5
let y = 2
console.log(x > y)
console.log(x < y)
console.log(x >= y)
console.log(x <= y)
y = '5'
console.log(x == y)
console.log(x === y)

x = ''
y = true
console.log(x <  y)
*/

/* Arithmetic Operators 
let num1 = 5
let num2 = 2
let result = num1 + num2
console.log(result, typeof result)

result = num1 - num2
console.log(result, typeof result)

result = num2 - num1
console.log(result, typeof result)

result = num1 * num2
console.log(result, typeof result)

result = num1 / num2
console.log(result, typeof result)

result = num2 / num1
console.log(result, typeof result)

result = num1 % num2
console.log(result, typeof result)

result = num1 ** num2
console.log(result, typeof result)

result = Math.pow(num1, num2)
console.log(result, typeof result)
*/


/*
// post-increment
let num = 4
let result = num++
console.log(num, result)
// pre-increment
num = 4
result = ++num
console.log(num, result)
*/

/* Type Conversion / coersion
let num = 6 
console.log(num, typeof(num))
num = String(6)
console.log(num, typeof(num))

let snum = '6' 
console.log(snum, typeof(snum))
snum = Number(snum)
console.log(snum, typeof(snum))

let x = '123.45 Main St' 
console.log(Number(x))
console.log(parseInt(x))
console.log(parseFloat(x))
*/


/*
let x
console.log(x, typeof x)
x = 8
console.log(x, typeof x)
// x = x + ''
x += ''
console.log(x, typeof x)
// x = x - 2
x -= 2
console.log(x, typeof x)
x = '8' + 4
console.log(x, typeof x)
x = +'8' + 4
console.log(x, typeof x)
*/


/*
console.log(Boolean(6))
console.log(Boolean(-6))
console.log(Boolean('Madhu'))
console.log(Boolean(!6))
console.log(!Boolean(6))
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(''))

let num1 = true;
//let num2 = true;
let num2 = false;
let result = num1 + num2
console.log(result, typeof result)
*/


/* Null & undefined 
let user = null
console.log(user)
console.log(typeof user)

let user
console.log(user)
console.log(typeof user)
*/

/* Boolean 
let bool = 5 > 6
console.log(bool)
console.log(typeof bool)
*/

/* Strings
//let user = 'Navin Reddy "Telusko"'
let user = "Navin Reddy \"Telusko\""
console.log(user) 
user = "Navin \n Reddy"
console.log(user) 
user = "Navin \t Reddy"
console.log(user) 
user = "Navin \v Reddy"
console.log(user) 
user = "Navin A\b Reddy"
console.log(user) 
*/

/* Numbers

let num1 = 0xf
console.log(num1)

num1 = 1.5e12
console.log(num1)

num1 = 10_000_000
console.log(num1)

num1 = 5/0
console.log(num1)

num1 = -5/0
console.log(num1)

console.log(Number.MAX_VALUE)
console.log(Number.MAX_VALUE * 10)

num1 = 10928766839202789n
console.log(num1)
console.log(typeof(num1))
console.log(num1 + 2n)

let num = 5
console.log(5 / 'Madhu')
console.log(typeof (5 / 'Madhu'))
*/


