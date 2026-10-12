// Q6. Check voting eligibility using a function expression.
const canVote = function (age) {
    return age >= 18;
};

const age = Number(prompt("Input your age:"));
if (canVote(age)) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}
