JavaScript arrays come with a variety of built-in methods that make it easier to manipulate and work with array data.
Some of the most commonly used array methods include:

//Basic Array Methods
//1: length: Returns the number of elements in an array.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length); // 4

//2: toString(): Converts an array to a string of (comma-separated) array values.
console.log(fruits.toString()); // "Banana,Orange,Apple,Mango"

//3: join(separator): Joins all array elements into a string. You can specify a separator.
console.log(fruits.join(" * ")); // "Banana * Orange * Apple * Mango"

//Adding and Removing Elements
//4: push(element): Adds a new element to the end of an array and returns the new length.
fruits.push("Kiwi");
console.log(fruits); // ["Banana", "Orange", "Apple", "Mango", "Kiwi"]

//5: pop(): Removes the last element from an array and returns that element.
const lastFruit = fruits.pop();
console.log(lastFruit); // "Kiwi"
console.log(fruits); // ["Banana", "Orange", "Apple", "Mango"]

//6: shift(): Removes the first element from an array and returns that element.
const firstFruit = fruits.shift();
console.log(firstFruit); // "Banana"
console.log(fruits); // ["Orange", "Apple", "Mango"]

//7: unshift(element): Adds a new element to the beginning of an array and returns the new length.
fruits.unshift("Lemon");
console.log(fruits); // ["Lemon", "Orange", "Apple", "Mango"]


//Modifying and Accessing Elements
//8: concat(array2, array3, ..., arrayN): Merges two or more arrays and returns a new array.
const moreFruits = ["Pineapple", "Grapes"];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ["Lemon", "Orange", "Apple", "Mango", "Pineapple", "Grapes"]

//9: slice(start, end): Returns a new array containing a portion of the original array, starting from start up to (but not including) end.
const citrus = fruits.slice(1, 3);
console.log(citrus); // ["Orange", "Apple"]

//10: splice(start, deleteCount, item1, item2, ..., itemN): Adds/removes items to/from an array, and returns the removed items.
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits); // ["Lemon", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]


//Iteration Methods
//11: forEach(callback): Executes a provided function once for each array element.
fruits.forEach(fruit => console.log(fruit));
// Lemon
// Orange
// Lemon
// Kiwi
// Apple
// Mango

//12: map(callback): Creates a new array with the results of calling a provided function on every element in the calling array.
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); // ["LEMON", "ORANGE", "LEMON", "KIWI", "APPLE", "MANGO"]


//13: filter(callback): Creates a new array with all elements that pass the test implemented by the provided function.
const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits); // ["Orange", "Lemon"]


//14: reduce(callback, initialValue): Executes a reducer function on each element of the array, resulting in a single output value.
const totalLength = fruits.reduce((total, fruit) => total + fruit.length, 0);
console.log(totalLength); // 29


//15: some(callback): Tests whether at least one element in the array passes the test implemented by the provided function.
const hasMango = fruits.some(fruit => fruit === "Mango");
console.log(hasMango); // true

//16: every(callback): Tests whether all elements in the array pass the test implemented by the provided function.
const allLong = fruits.every(fruit => fruit.length > 3);
console.log(allLong); // true


//Searching and Sorting
//17: indexOf(element): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
const index = fruits.indexOf("Apple");
console.log(index); // 4

//18: find(callback): Returns the value of the first element in the array that satisfies the provided testing function.
const found = fruits.find(fruit => fruit.startsWith("L"));
console.log(found); // "Lemon"

//19: findIndex(callback): Returns the index of the first element in the array that satisfies the provided testing function.
const foundIndex = fruits.findIndex(fruit => fruit.startsWith("L"));
console.log(foundIndex); // 0


//20: sort(compareFunction): Sorts the elements of an array in place and returns the array.
fruits.sort();
console.log(fruits); // ["Apple", "Kiwi", "Lemon", "Lemon", "Mango", "Orange"]

//21: reverse(): Reverses the order of the elements in an array in place.
fruits.reverse();
console.log(fruits); // ["Orange", "Mango", "Lemon", "Lemon", "Kiwi", "Apple"]

//Other Useful Methods
//22: includes(element): Determines whether an array includes a certain value among its entries, returning true or false.
const hasKiwi = fruits.includes("Kiwi");
console.log(hasKiwi); // true

//23: flat(depth): Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const nestedArray = [1, [2, [3, [4]]]];
const flatArray = nestedArray.flat(2);
console.log(flatArray); // [1, 2, 3, [4]]

//24: flatMap(callback): First maps each element using a mapping function, then flattens the result into a new array.
const flatMapped = fruits.flatMap(fruit => fruit.split(""));
console.log(flatMapped); // ["O", "r", "a", "n", "g", "e", "M", "a", "n", "g", "o", "L", "e", "m", "o", "n", "L", "e", "m", "o", "n", "K", "i", "w", "i", "A", "p", "p", "l", "e"]



