const {sum, concat} = require('./utilities/file1.js');
const {lgNum , cut3} = require('./utilities/file2.js');

const oddArray = [1, 3, 5, 7, 9];
const evenArray = [2, 4, 6, 8, 10];

console.log('Sum result: ' + sum(oddArray));

console.log('Concat result: ' + concat(oddArray, evenArray));

console.log('lgNum result: ' + lgNum(evenArray));

console.log('Cut3 result: ' + cut3(oddArray));