//The spread operator in JavaScript, denoted by three dots (...), is a powerful feature introduced in ES6. It allows you to expand elements of an iterable (like an array or string) into individual elements. This can be particularly useful in various scenarios such as copying arrays, merging arrays, spreading elements in function calls, and more.

//1. Copying Arrays
//The spread operator can be used to create a shallow copy of an array.
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // Output: [1, 2, 3]



//2. Merging Arrays
//You can merge multiple arrays into one using the spread operator.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];

console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]


//3. Spreading Elements in Function Calls
//The spread operator can be used to pass elements of an array as arguments to a function.
function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6


//4. Using with Objects
//The spread operator can also be used with objects to create a shallow copy or merge properties.

//Copying Objects
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };

console.log(copiedObject); // Output: { a: 1, b: 2 }


//Merging Objects
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const mergedObject = { ...object1, ...object2 };

console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }


//5. Using with Strings
//The spread operator can be used to convert a string into an array of characters.
const str = "hello";
const charArray = [...str];

console.log(charArray); // Output: ['h', 'e', 'l', 'l', 'o']

//6. Combining with Destructuring
//You can combine the spread operator with destructuring to extract parts of an array or object.

//Arrays
const number = [1, 2, 3, 4, 5];
const [first, second, ...rest] = number;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

//Objects
const person = { name: 'John', age: 30, city: 'New York' };
const { name, ...details } = person;

console.log(name); // Output: John
console.log(details); // Output: { age: 30, city: 'New York' }

//7. Using in Function Arguments
//You can use the spread operator to collect all remaining arguments into an array.



function multiply(multiplier, ...numbers) {
    return numbers.map(number => number * multiplier);
}

console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]