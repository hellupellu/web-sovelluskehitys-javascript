'use strict';

const number = Number(prompt('Enter a positive integer:'));
const output = document.querySelector('#output');

let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i;
}
output.textContent = `The sum of integers from 1 to ${number} is: ${sum}`;