// Q19. Simple calculator using mixed function types.
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

const subtract = function (a, b) {
    return a - b;
};

function divide(a, b) {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
}

const a = Number(prompt("Input first number:"));
const b = Number(prompt("Input second number:"));
const operator = prompt("Input operator (+, -, *, /):");

let result;
switch (operator) {
    case "+": result = add(a, b); break;
    case "-": result = subtract(a, b); break;
    case "*": result = multiply(a, b); break;
    case "/": result = divide(a, b); break;
    default: result = "Invalid operator";
}

console.log("Result : " + result);
