'use strict';

const celsius = Number(prompt('Enter temperature in Celsius:'));
const fahrenheit = (celsius * 9/5) + 32;
const kelvin = celsius + 273.15;

const output = document.querySelector('#output');
output.innerHTML = `${celsius} °C = ${fahrenheit} °F and ${kelvin} K`;