'use strict';

const score = Number(prompt('Enter your score: '));
const output = document.querySelector('#output');

if (score >= 88) {
    output.innerHTML = 'Your grade is 5.';
} else if (score >= 76) {
    output.innerHTML = 'Your grade is 4.';
} else if (score >= 64) {
    output.innerHTML = 'Your grade is 3.';
} else  if (score >= 52) {
    output.innerHTML = 'Your grade is 2.';
} else if (score >= 40) {
    output.innerHTML = 'Your grade is 1.';
} else {
    output.innerHTML = 'Your grade is 0.';
}