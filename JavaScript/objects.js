// Objects
const person = {
  firstName: 'Sherece',
  lastName: 'Bledsoe',
  age: 32,
  hobbies: ['Reading', 'Roller Skating', 'Sewing'],

  greet() {
    console.log(`Hello, my name is ${this.firstName}.`);
  },
};


// Accessing Object Properties
console.log(person.lastName);
console.log(person.age);

// Modifying Object Properties
person.lastName = 'Gundlah';
console.log(person.lastName);

// Accessing Object Methods
person.greet();

// Adding new properties to the object
person.nationality = 'American';
console.log(person.nationality);

// Adding new methods to the object
person.introduce = function() {
  // Template literals
  console.log(`I am a ${this.age} year old ${this.nationality}.`);
};

person.introduce();

// Nesting Objects
const address = {
  street: '39 Mayo',
  city: 'Hurlburt Field',
  state: 'FL',
};

person.location = address;
console.log(person.location.street);

// Object Destructuring
const { firstName, lastName, age } = person;

console.log(firstName, lastName, age);

console.log(person.hobbies[1]);


console.log(person);
