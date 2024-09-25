//Example 1: Single Parameter, Single Expression
const square = x => x * x;
console.log(square(4)); 


//Example 2: Multiple Parameters
const add = (a, b) => a + b;
console.log(add(2, 3)); 

//Example 3: No Parameters
const greet = () => 'Hello, World!';
console.log(greet()); // Hello, World!

//Example 4: With Block Body
const sum = (a, b) => {
    const result = a + b;
    return result;
};
console.log(sum(2, 3)); // 5


