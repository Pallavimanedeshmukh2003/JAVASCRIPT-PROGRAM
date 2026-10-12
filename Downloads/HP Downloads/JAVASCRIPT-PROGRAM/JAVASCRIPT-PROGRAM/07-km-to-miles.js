// Q7. Convert kilometers to miles using a function expression.
const kmToMiles = function (km) {
    return km * 0.621371;
};

const km = Number(prompt("Input distance in kilometers:"));
console.log(`${km} km = ${kmToMiles(km).toFixed(2)} miles`);
