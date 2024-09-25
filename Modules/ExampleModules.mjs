
//Types of Exports
//1. Named Exports: You can export multiple values from a module. Each value must be imported using the same name.
// person.js
export const Name = "Jesse";
export const Age = 40;

// main.js
import { personName, personAge } from './person.js';
console.log(personName); // Jesse
console.log(personAge);  // 40


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
import { weight, height } from './person.js';

//2. Default Imports: No curly braces needed.
import Message from './message.js';


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
import { createCanvasElement } from './modules/canvas.js';
import { drawSquareElement } from './modules/square.js';

const ctx = createCanvas(500, 500);
drawSquare(ctx, 50, 50, 100);
