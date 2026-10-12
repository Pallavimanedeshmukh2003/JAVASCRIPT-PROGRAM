// Q21. Calculate online order total using mixed function types.
const getDeliveryCharge = amount => amount >= 500 ? 0 : 40;

const calculateGST = function (amount) {
    return amount * 0.05;
};

function calculateOrderTotal(amount) {
    return amount + calculateGST(amount) + getDeliveryCharge(amount);
}

const amount = Number(prompt("Input order amount:"));
console.log("GST : " + calculateGST(amount));
console.log("Delivery charge : " + getDeliveryCharge(amount));
console.log("Total : " + calculateOrderTotal(amount));
