// Q16. Find the larger number using all three function types.
function largerNamed(a, b) {
    return a > b ? a : b;
}

const largerExpression = function (a, b) {
    return a > b ? a : b;
};

const largerArrow = (a, b) => a > b ? a : b;

const a = Number(prompt("Input first number:"));
const b = Number(prompt("Input second number:"));
console.log("Named function : " + largerNamed(a, b));
console.log("Function expression : " + largerExpression(a, b));
console.log("Arrow function : " + largerArrow(a, b));
