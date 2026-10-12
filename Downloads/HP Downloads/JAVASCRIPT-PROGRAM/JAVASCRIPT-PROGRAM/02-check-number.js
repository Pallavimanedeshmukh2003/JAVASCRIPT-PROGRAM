// Q2. Check whether a number is positive, negative, or zero using a named function.
function checkNumber(n) {
    if (n > 0) return "Positive";
    if (n < 0) return "Negative";
    return "Zero";
}

const n = Number(prompt("Input any number:"));
console.log(n + " is " + checkNumber(n));
