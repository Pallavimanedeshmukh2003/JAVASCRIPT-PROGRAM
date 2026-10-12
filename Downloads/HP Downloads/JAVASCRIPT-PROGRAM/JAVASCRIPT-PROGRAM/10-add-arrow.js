// Q10. Add two numbers using an arrow function with implicit return.
const add = (a, b) => a + b;

const a = Number(prompt("Input first number:"));
const b = Number(prompt("Input second number:"));
console.log(`The sum of ${a} and ${b} is : ${add(a, b)}`);
