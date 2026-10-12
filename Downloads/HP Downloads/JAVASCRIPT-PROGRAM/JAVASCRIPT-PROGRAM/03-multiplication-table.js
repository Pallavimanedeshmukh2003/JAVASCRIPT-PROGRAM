// Q3. Print a multiplication table using a named function that prints by itself.
function printTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

const n = Number(prompt("Input any number:"));
printTable(n);
