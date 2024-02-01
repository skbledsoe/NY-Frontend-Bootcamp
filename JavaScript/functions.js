// FUNCTIONS

// FUNCTION DECLARATION
// use if you want to take advantage of hoisting - maybe you declare all functions at the bottom but invoke them at the top
// can be invoked prior to initialization
greet(); // no error

function greet() {
  console.log('Hello there! This is a function declaration.');
}

greet();

// FUNCTION EXPRESSION
// use these most of the time to avoid potential errors caused by hoisting
// used when hoisting is not important
// cannot be invoked prior to initialization
// expression(); // ReferenceError

const expression = function() {
  console.log('Hello from the function expression!');
};

expression();

// FUNCTION PARAMETERS
function greetings(name) {
  console.log(`Greetings, ${name}!`);
}

greetings('Kelly');
greetings('Robert');
greetings('Nick');

// RETURN A VALUE
const sum = (a, b) => a + b;

const difference = function(a, b) {
  return a - b;
}

console.log(sum(3, 2));
console.log(difference(5, 2));

let result = sum(6, 5);
console.log(result);

// GLOBAL AND LOCAL SCOPE
let globalVar = 'I am a global variable.';

function localScope() {
  let localVar = 'I am a local variable';
  console.log(globalVar);
  console.log(localVar);
}

localScope();

console.log(globalVar);
// console.log(localVar); //ReferenceError, scoped to the block of the function

function newSum(a, b) {
  let c = a + b;
  return c;
}

console.log(newSum(2, 3));

// HIGHER-ORDER FUNCTION
function calculate(operation, num1, num2) {
  return operation(num1, num2);
}

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

let Sum = calculate(addition, 6, 5);
let newDifference = calculate(subtraction, 9, 3);

console.log(`The answer to addition is ${Sum}`);
console.log(`The answer to subtraction is ${newDifference}`);