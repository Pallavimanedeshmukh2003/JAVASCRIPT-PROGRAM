// Q9. Find cube using an arrow function with one parameter and implicit return.
const cube = n => n * n * n;

const n = Number(prompt("Input any number:"));
console.log(`The cube of ${n} is : ${cube(n)}`);
