// Q14. Find the average of three numbers using an arrow function.
const average = (a, b, c) => (a + b + c) / 3;

const a = Number(prompt("Input first number:"));
const b = Number(prompt("Input second number:"));
const c = Number(prompt("Input third number:"));
console.log("The average is : " + average(a, b, c).toFixed(2));
