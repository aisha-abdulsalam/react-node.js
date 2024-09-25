//Destructuring in JavaScript is a powerful feature that allows you to unpack values from arrays or properties from objects into distinct variables. This can make your code more concise and readable.

//1. Array Destructuring
//Array destructuring allows you to extract values from an array and assign them to variables in a single statement.

//1. Basic Syntax
const fruits = ['apple', 'banana', 'cherry'];
const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1); // apple
console.log(fruit2); // banana
console.log(fruit3); // cherry


//2. Skipping Values
//You can skip values in the array by leaving empty spaces between commas.
const colors = ['red', 'green', 'blue', 'yellow'];
const [primary, , secondary] = colors;

console.log(primary); // red
console.log(secondary); // blue


//3. Default Values
//You can assign default values to variables in case the array doesn’t have enough elements.
const animals = ['dog'];
const [animal1, animal2 = 'cat'] = animals;

console.log(animal1); // dog
console.log(animal2); // cat


//4. Rest Operator
//The rest operator (...) can be used to collect the remaining elements into an array.
const numbers = [10, 20, 30, 40, 50];
const [num1, num2, ...remaining] = numbers;

console.log(num1); // 10
console.log(num2); // 20
console.log(remaining); // [30, 40, 50]


//2. Object Destructuring
//Object destructuring allows you to extract properties from an object and assign them to variables.

//1. Basic Syntax
const car = { brand: 'Toyota', model: 'Corolla' };
const { brand, model } = car;

console.log(brand); // Toyota
console.log(model); // Corolla

//2. Renaming Variables
//You can rename the variables while destructuring.
const book = { title: '1984', author: 'George Orwell' };
const { title: bookTitle, author: bookAuthor } = book;

console.log(bookTitle); // 1984
console.log(bookAuthor); // George Orwell

//3. Default Values
//You can assign default values to variables in case the property doesn’t exist in the object.
const user = { username: 'johndoe' };
const { username, email = 'default@example.com' } = user;

console.log(username); // johndoe
console.log(email); // default@example.com

//3. Nested Destructuring
//You can destructure nested objects.
const company = {
    name: 'Tech Corp',
    location: {
      city: 'San Francisco',
      zip: '94105'
    }
  };
  const { name, location: { city, zip } } = company;
  
  console.log(name); // Tech Corp
  console.log(city); // San Francisco
  console.log(zip); // 94105
  

//Practical Uses
//Function Parameters
//Destructuring can be very useful when dealing with function parameters.
function greet({ name, age }) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

const person = { name: 'John', age: 30 };
greet(person); // Hello, my name is John and I am 30 years old.

//Swapping Variables
//you can swap the values of two variables without a temporary variable.
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1


//Destructuring is a versatile feature that can simplify your code and make it more readable. It’s widely used in modern JavaScript, especially in frameworks like React and Node.js


