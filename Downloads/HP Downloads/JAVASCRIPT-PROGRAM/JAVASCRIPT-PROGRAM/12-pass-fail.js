// Q12. Check pass or fail using an arrow function with a block body.
const getResult = marks => {
    if (marks >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }
};

const marks = Number(prompt("Input marks:"));
console.log("Result : " + getResult(marks));
