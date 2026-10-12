// Q20. Calculate fuel cost using mixed function types.
const calculateFuelNeeded = (distance, mileage) => distance / mileage;

const calculateTripCost = function (fuel, pricePerLitre) {
    return fuel * pricePerLitre;
};

function printTripSummary(distance, mileage, pricePerLitre) {
    const fuel = calculateFuelNeeded(distance, mileage);
    const cost = calculateTripCost(fuel, pricePerLitre);
    console.log("Fuel needed : " + fuel + " litres");
    console.log("Trip cost : Rs " + cost);
}

const distance = Number(prompt("Input distance (km):"));
const mileage = Number(prompt("Input mileage (km per litre):"));
const pricePerLitre = Number(prompt("Input price per litre:"));
printTripSummary(distance, mileage, pricePerLitre);
