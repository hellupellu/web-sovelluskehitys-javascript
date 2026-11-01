'use strict';

function sortArray(numbers) {
    const newArray = [];

    for(let number of numbers) {
        newArray.push(number);
    }
    newArray.sort((a, b) => a - b);
    return newArray;
}

const numbers = [5, 2, 8, 1, 9];
const sortedNumbers = sortArray(numbers);
console.log('Original array:', numbers);
console.log('Sorted array:', sortedNumbers);