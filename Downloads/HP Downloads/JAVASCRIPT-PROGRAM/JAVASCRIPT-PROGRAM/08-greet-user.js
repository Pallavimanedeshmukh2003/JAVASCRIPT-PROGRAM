// Q8. Greet a user using a function expression that prints by itself.
const greetUser = function (name) {
    console.log(`Hello, ${name}! Welcome to JavaScript.`);
};

const name = prompt("Input your name:");
greetUser(name);
