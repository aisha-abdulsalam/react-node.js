JavaScript modules are a way to organize and reuse code by splitting it into separate files. This makes your codebase easier to maintain and understand.

What Are JavaScript Modules?
A module in JavaScript is a file containing code that can be reused across different parts of your application. Modules help in organizing code by encapsulating related functionality, making it easier to manage and debug.

Key Concepts
Exporting: This is how you make functions, objects, or values available to other modules.
Importing: This is how you bring in functions, objects, or values from other modules into your current file.

Types of Exports
Named Exports: You can export multiple values from a module. Each value must be imported using the same name.
Default Exports: You can export a single value from a module. This value can be imported with any name.


//Types of Exports
//1. Named Exports: You can export multiple values from a module. Each value must be imported using the same name.
// person.js
export const name = "Jesse";
export const age = 40;

// main.js
import { name, age } from './person.js';
console.log(name); // Jesse
console.log(age);  // 40


//2. Default Exports: You can export a single value from a module. This value can be imported with any name.
// message.js
const message = () => {
    return "Hello, World!";
};
export default message;

// main.js
import msg from './message.js';
console.log(msg()); // Hello, World!

//Importing Modules
//1. Named Imports: Use curly braces to import specific values.
import { name, age } from './person.js';

//2. Default Imports: No curly braces needed.
import message from './message.js';


Benefits of Using Modules
Maintainability: Easier to manage and update code.
Reusability: Share code across different parts of your application.
Encapsulation: Keep related code together and avoid global scope pollution.
Dependency Management: Clearly define dependencies between different parts of your application.
Example Structure
a simple example to illustrate how modules can be structured:

project/
│
├── index.html
├── main.js
└── modules/
    ├── canvas.js
    └── square.js

//canvas.js: Contains functions related to setting up a canvas.
export function createCanvas(width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    document.body.appendChild(canvas);
    return canvas.getContext('2d');
}


//square.js: Contains functions to draw a square.
export function drawSquare(ctx, x, y, size) {
    ctx.fillRect(x, y, size, size);
}


//main.js: Imports and uses the functions from the modules.
import { createCanvas } from './modules/canvas.js';
import { drawSquare } from './modules/square.js';

const ctx = createCanvas(500, 500);
drawSquare(ctx, 50, 50, 100);
