// Q17. Convert a named multiply function to expression and arrow function.
function multiplyNamed(a, b) {
    return a * b;
}

const multiplyExpression = function (a, b) {
    return a * b;
};

const multiplyArrow = (a, b) => a * b;

const a = Number(prompt("Input first number:"));
const b = Number(prompt("Input second number:"));
console.log("Named function : " + multiplyNamed(a, b));
console.log("Function expression : " + multiplyExpression(a, b));
console.log("Arrow function : " + multiplyArrow(a, b));
