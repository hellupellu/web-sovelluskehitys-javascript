'use strict';

const numbers = [];

let input = prompt("Enter a number (or 'done' to finish):");
while (input !== 'done') {
    numbers.push(Number(input));
    input = prompt("Enter a number (or 'done' to finish):");
}

const evenNumbers = [];
for (let number of numbers) {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
}
if (evenNumbers.length > 0) {
    console.log('Even numbers: ' + evenNumbers);
} else {
    console.log('Even numbers: None');
}