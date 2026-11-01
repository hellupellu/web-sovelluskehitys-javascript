'use strict';

function sortArray(numbers, order) {
    const newArray = [];

    for(let number of numbers) {
        newArray.push(number);
    }
    if (order === 'asc') {
        newArray.sort((a, b) => a - b);
    } else if (order === 'desc') {
        newArray.sort((a, b) => b - a);
    }
    return newArray;
}

const numbers = [5, 2, 8, 1, 9];
console.log('Original array:', numbers);
console.log(sortArray(numbers, "asc"));
console.log(sortArray(numbers, "desc"));