function multiply(a, b) {
    return a * b;
}

let Num = Number(prompt("Enter a number:"));

if (Num % 2 === 0)
    console.log(`${Num} is even.`);
else 
    console.log(`${Num} is odd.`);

let num1 = Number(prompt("Enter the first number to multiply:"));
let num2 = Number(prompt("Enter the second number to multiply:"));

let product = multiply(num1, num2);
console.log(`The product of ${num1} and ${num2} is: ${product}`);
