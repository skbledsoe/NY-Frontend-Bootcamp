console.log("I'm still pretty tired");

// Polymorphism

class Animal {
  makeSound() {
    return 'The animal makes a noise';
  }
};

class Dog extends Animal {
  makeSound() {
    return super.makeSound() + ': BARK!';
  }
};

class Cat extends Animal {
  makeSound() {
    return super.makeSound() + ': MEOW!';
  }
};

const dog = new Dog();
const cat = new Cat();

console.log(dog.makeSound());
console.log(cat.makeSound());