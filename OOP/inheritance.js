console.log('I am tired');
// Inheritance

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
};

class Dog extends Animal {
  bark() {
    console.log(`${this.name} is barking.`);
  }
};

class Cat extends Animal {
  purr() {
    console.log(`${this.name} is purring.`);
  }
};

const kitty = new Cat('Lily');
kitty.purr();
kitty.eat();

const pup = new Dog('Mabel');
pup.bark();
pup.eat();