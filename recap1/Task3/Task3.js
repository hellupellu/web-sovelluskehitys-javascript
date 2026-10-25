'use strict';

const side1 = Number(prompt('Enter the length of the first side of the triangle:'));
const side2 = Number(prompt('Enter the length of the second side of the triangle:'));
const side3 = Number(prompt('Enter the length of the third side of the triangle:'));

const output = document.querySelector('#output');

if (side1 == side2 && side2 == side3) {
    output.innerHTML = `The triangle is equilateral.`;
} else if (side1 == side2 || side1 == side3 || side2 == side3) {
    output.innerHTML = `The triangle is isosceles.`;
} else {
    output.innerHTML = `The triangle is scalene.`;
}