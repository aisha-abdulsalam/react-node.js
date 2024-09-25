A variable is a container for storing data values. In JavaScript, you can declare variables using three keywords: var, let, and const.


//Declaring Variables
//1: var: This keyword was used in all JavaScript code from 1995 to 2015. It has function scope, which means it is accessible within the function it was declared in.
var x = 5;
var y = 6;
var z = x + y;

//2: let: Introduced in ES6 (2015), let has block scope, meaning it is only accessible within the block it was declared in.
let a = 10;
let b = 20;
let c = a + b;

//3: const: Also introduced in ES6, const is used to declare variables that are constant and cannot be reassigned. It also has block scope.
const pi = 3.14;
const radius = 5;
const area = pi * radius * radius;


Scope
Global Scope: Variables declared outside any function have global scope. They can be accessed from anywhere in the code.
Function Scope: Variables declared with var inside a function are function-scoped.
Block Scope: Variables declared with let or const inside a block (e.g., inside {}) are block-scoped.

//Hoisting
//JavaScript variables are “hoisted” to the top of their scope. This means you can use a variable before it is declared. However, only the declaration is hoisted, not the initialization.
//Example 1:
console.log(x); // undefined
var x = 5;

Data Types
JavaScript variables can hold different data types:

Numbers: let age = 25;
Strings: let name = "John";
Booleans: let isStudent = true;
Objects: let person = {firstName: "John", lastName: "Doe"};
Arrays: let colors = ["red", "green", "blue"];

Best Practices
Always declare variables: Avoid using undeclared variables.
Use const by default: If you don’t plan to reassign the variable, use const.
Use let for variables that will change: If you need to reassign the variable, use let.
Avoid using var: var has some quirks due to its function scope and hoisting behavior.

//Example 2:
const button = document.querySelector("#myButton");
let count = 0;

button.onclick = () => {
  count += 1;
  console.log(`Button clicked ${count} times`);
};
//In this example, button is a constant reference to a DOM element, and count is a variable that increments each time the button is clicked.

