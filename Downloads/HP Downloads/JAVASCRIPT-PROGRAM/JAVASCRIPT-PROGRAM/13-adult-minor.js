// Q13. Classify adult or minor using an arrow function and ternary operator.
const getAgeGroup = age => age >= 18 ? "Adult" : "Minor";

const age = Number(prompt("Input age:"));
console.log("Age group : " + getAgeGroup(age));
