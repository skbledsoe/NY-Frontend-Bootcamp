// task 1
const square = (a) => a * a;
console.log(square(3));

// task 2
const name = 'John';
const age = 48;
const welcomeMessage = `Hello ${name}, you are ${age} years old.`

console.log(welcomeMessage);

// task 3
const person = {
  firstName: 'Sherece',
  lastName: 'Bledsoe',
  age: 32,
};

const { firstName, lastName } = person;
console.log(firstName);
console.log(lastName);

// task 4
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArr = [...arr1, ...arr2];
console.log(mergedArr);

// task 5
const areaOfRectangle = (length = 5, width = 25) => {
  return length * width;
}

console.log(areaOfRectangle());

// task 6
person.greet = function() {
  console.log(`Hi, my name is ${this.firstName}. I'm ${this.age} years old.`)
}

person.greet();