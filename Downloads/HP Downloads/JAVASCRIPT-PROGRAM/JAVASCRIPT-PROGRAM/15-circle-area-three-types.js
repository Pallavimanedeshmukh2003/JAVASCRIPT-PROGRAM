// Q15. Find circle area using all three function types.
function areaNamed(radius) {
    return 3.14 * radius * radius;
}

const areaExpression = function (radius) {
    return 3.14 * radius * radius;
};

const areaArrow = radius => 3.14 * radius * radius;

const radius = Number(prompt("Input radius:"));
console.log("Named function : " + areaNamed(radius).toFixed(2));
console.log("Function expression : " + areaExpression(radius).toFixed(2));
console.log("Arrow function : " + areaArrow(radius).toFixed(2));
