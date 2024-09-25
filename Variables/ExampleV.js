
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

//Hoisting
//JavaScript variables are “hoisted” to the top of their scope. This means you can use a variable before it is declared. However, only the declaration is hoisted, not the initialization.
//Example 1:
console.log(x); // undefined
var x = 5;

//Example2:
const button = document.querySelector("#myButton");
let count = 0;

button.onclick = () => {
  count += 1;
  console.log(`Button clicked ${count} times`);
};
//In this example, button is a constant reference to a DOM element, and count is a variable that increments each time the button is clicked.

