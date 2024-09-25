Classes in JavaScript are templates for creating objects. They encapsulate data and functions that operate on that data. Introduced in ES6 (ECMAScript 2015), classes provide a more structured and syntactically cleaner way to work with objects and inheritance.

Defining a Class
You can define a class using the class keyword. There are two ways to define a class: class declarations and class expressions.

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
const myCar = new Car("Ford", 2014, "Mustang");
myCar.start(); // Output: Ford is starting
myCar.displayModel(); // Output: This car is a Mustang

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

conclusion
Classes in JavaScript provide a powerful and flexible way to create and manage objects. They offer a clean syntax for defining constructors, methods, and inheritance, making your code more organized and easier to understand.





