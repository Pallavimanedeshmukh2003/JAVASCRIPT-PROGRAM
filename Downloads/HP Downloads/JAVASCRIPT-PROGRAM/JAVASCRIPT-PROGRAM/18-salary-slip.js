// Q18. Prepare a salary slip using mixed function types.
const calculateHRA = basic => basic * 0.20;

const calculateDA = function (basic) {
    return basic * 0.10;
};

function calculateGross(basic) {
    return basic + calculateHRA(basic) + calculateDA(basic);
}

const basic = Number(prompt("Input basic salary:"));
console.log("HRA : " + calculateHRA(basic));
console.log("DA : " + calculateDA(basic));
console.log("Gross salary : " + calculateGross(basic));
