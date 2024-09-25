
//Class Declaration
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

//Class Expression
const Car = class {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
};


//1. Constructor Method
//The constructor method is a special method for creating and initializing an object created with a class. It is called automatically when a new object instance is created.
const myCar = new Car("Ford", 2014);
console.log(myCar.name); // Output: Ford

//2. Class Methods
//Class methods are functions that are defined inside a class. They are used to define behaviors of the objects created from the class.
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}
const MyCar = new Car("Ford", 2014);
console.log(MyCar.age()); // Output: 10 (assuming the current year is 2024)

//3. Static Methods
//Static methods are defined on the class itself, not on instances of the class. They are called on the class, not on objects created from the class.
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  static compare(car1, car2) {
    return car1.year - car2.year;
  }
}
const car1 = new Car("Ford", 2014);
const car2 = new Car("Audi", 2019);
console.log(Car.compare(car1, car2)); // Output: -5


//4. Inheritance
//Classes can inherit from other classes using the extends keyword. This allows you to create a class that is a child of another class, inheriting its properties and methods.
class Vehicle {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  start() {
    console.log(`${this.name} is starting`);
  }
}

class Car extends Vehicle {
  constructor(name, year, model) {
    super(name, year);
    this.model = model;
  }

  displayModel() {
    console.log(`This car is a ${this.model}`);
  }
}
const mycar = new Car("Ford", 2014, "Mustang");
mycar.start(); // Output: Ford is starting
mycar.displayModel(); // Output: This car is a Mustang

//5. Private Fields
//Private fields are properties that are not accessible outside the class. They are defined using the # prefix.
class Car {
  #mileage = 0;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  drive(miles) {
    this.#mileage += miles;
  }

  getMileage() {
    return this.#mileage;
  }
}
const Mycar = new Car("Ford", 2014);
Mycar.drive(100);
console.log(Mycar.getMileage()); // Output: 100

