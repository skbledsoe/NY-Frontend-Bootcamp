// MODERN JS FEATURES

// traditional way to declare a function
function greet() {
  console.log('Hello');
}
greet();


// ARROW FUNCTIONS
const greeter = () => {
  console.log('Hi');
} // all code after the = is also known as an anonymous function
greeter();

const square = a => a * a;
console.log(square(6));


// ENHANCED OBJECT LITERALS
const person = {
  name: 'Sherece',
  age: 32,

  greeting() {
    console.log(`${this.name} is greeting you.`);
  }
};

person.greeting();


// SPREAD & REST OPERATORS
// Rest (contain rest of arguments into an array)
function myFunction(firstArg, ...restOfArgs) {
  console.log(firstArg);
  console.log(restOfArgs);
}

myFunction('one', 'two', 'three', 'four', 'five');

// Spread (spread array out)
function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}

const numbers = [2, 4, 6];
console.log(sum(...numbers));


// COMMON BUILT-IN METHODS
// Arrays
// Filter
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = nums.filter( num => num % 2 === 0);
const odd = nums.filter( num => num % 2 !== 0);
console.log(even);
console.log(odd);

// Strings
// Split
const message = 'Hello, world!';
const words = message.split(', ');
console.log(words);

// Includes
const sentence = 'The quick brown fox jumps over the lazy dog.'
const containsWord = sentence.includes('fox');
console.log(containsWord); // true

// Length
const sampleString = 'Welcome!'
console.log(sampleString.length);

// Objects
// keys
const keys = Object.keys(person);
console.log(keys);

// values
const values = Object.values(person);
console.log(values);

// Math
// max and min
console.log(Math.max(20, 5, 10));
console.log(Math.min(20, 5, 10));

// round - rounds to closest whole number
console.log(Math.round(3.14159));
console.log(Math.round(3.65));

// floor - always rounds down
console.log(Math.floor(3.74159));

// ceil - always rounds up
console.log(Math.ceil(3.14159));

// random
console.log(Math.random());
console.log(Math.random() * 100);

// nested math methods
console.log(Math.round(Math.random() * 100));

// Other Methods
// toFixed
const pi = 3.141592;
console.log(pi.toFixed(2));

// date
const currentDate = new Date();
console.log(currentDate);

const yule = new Date(2024, 11, 21);
console.log(yule);

// toString
const numString = 38;
const parsedString = numString.toString();
console.log(parsedString + 1);




