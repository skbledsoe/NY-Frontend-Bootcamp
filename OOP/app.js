class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    throw new Error("Method not implemented");
  }
};

class Rectangle extends Shape {
  displayFormula() {
    console.log('width * height = area of a rectangle');
  }

  calculateArea() {
    console.log(this.width * this.height);
  }
}

const shape1 = new Rectangle(4, 3);
shape1.displayFormula();
shape1.calculateArea();
