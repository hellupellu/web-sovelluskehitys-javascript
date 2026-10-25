'use strict';

const x1 = Number(prompt('Enter x1: '));
const y1 = Number(prompt('Enter y1: '));
const x2 = Number(prompt('Enter x2: '));
const y2 = Number(prompt('Enter y2: '));

const distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

const output = document.querySelector('#output');
output.innerHTML = `Distance between (${x1}, ${y1}) and (${x2}, ${y2}) is ${distance}`;