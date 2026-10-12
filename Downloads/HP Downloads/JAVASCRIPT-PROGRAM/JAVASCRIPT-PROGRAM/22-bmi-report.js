// Q22. Prepare a BMI report using mixed function types.
const calculateBMI = (weight, height) => weight / (height * height);

const getBMICategory = function (bmi) {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal";
    if (bmi < 30) return "Overweight";
    return "Obese";
};

function printBMIReport(weight, height) {
    const bmi = calculateBMI(weight, height);
    console.log("BMI : " + bmi.toFixed(2));
    console.log("Category : " + getBMICategory(bmi));
}

const weight = Number(prompt("Input weight (kg):"));
const height = Number(prompt("Input height (meters):"));
printBMIReport(weight, height);
