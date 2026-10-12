// Q5. Find the area of a rectangle using a function expression.
const areaOfRectangle = function (length, width) {
    return length * width;
};

const length = Number(prompt("Input length:"));
const width = Number(prompt("Input width:"));
console.log("The area of the rectangle is : " + areaOfRectangle(length, width));
