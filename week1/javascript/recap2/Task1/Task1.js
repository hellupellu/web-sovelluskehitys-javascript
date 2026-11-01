'use strict';

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
console.log('Fruits: [' + fruits + ']');
console.log('Length of Fruits: ' + fruits.length); // Output: 5
console.log('Element at index 2: ' + fruits[2]); // Output: orange
console.log('Last Element of Fruits: ' + fruits[fruits.length - 1]); // Output: kiwi

const vegetables = [];
vegetables.push(prompt('Enter a vegetable:'));
vegetables.push(prompt('Enter another vegetable:'));
vegetables.push(prompt('Enter one more vegetable:'));
console.log('Vegetables: [' + vegetables + ']');
console.log('Length of Vegetables: ' + vegetables.length); // Output: 3