// Q1. Calculate simple interest using a named function.
function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

const principal = Number(prompt("Input principal:"));
const rate = Number(prompt("Input rate:"));
const time = Number(prompt("Input time (years):"));
const interest = calculateSimpleInterest(principal, rate, time);

console.log("The simple interest is : " + interest);
