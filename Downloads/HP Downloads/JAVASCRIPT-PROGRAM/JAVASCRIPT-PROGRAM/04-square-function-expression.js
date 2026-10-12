// Q4. Find the square of a number using a function expression.
const square = function (n) {
    return n * n;
};

const n = Number(prompt("Input any number for square:"));
console.log(`The square of ${n} is : ${square(n)}`);
