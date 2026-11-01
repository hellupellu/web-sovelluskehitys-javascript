'use strict';

  const numbers = [];
  numbers.push(Number(prompt('Enter number 1: ')));
  numbers.push(Number(prompt('Enter number 2: ')));
  numbers.push(Number(prompt('Enter number 3: ')));
  numbers.push(Number(prompt('Enter number 4: ')));
  numbers.push(Number(prompt('Enter number 5: ')));

  console.log('Numbers: [' + numbers.join(', ') + ']');

  const searchNumber = Number(prompt('Enter a Number to Search: '));
  if (numbers.includes(searchNumber)) {
    console.log('Number ' + searchNumber + ' is found in the array.');
    } else {
    console.log('Number ' + searchNumber + ' is not found in the array.');
    }

    numbers.pop(numbers[numbers.length - 1]);
    console.log('Updated Numbers: [' + numbers.join(', ') + ']');

    numbers.sort((a, b) => a - b);
    console.log('Sorted Numbers: [' + numbers.join(', ') + ']');