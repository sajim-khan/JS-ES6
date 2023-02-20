const max = Math.max(3,43,45,56);
console.log(max);

const number = [3,43,45,56];
const largest = Math.max(...number);
//console.log(...number);
//console.log(largest);


const numbers = [3,43,45,56];
const numbers2 = [67, 54, 54, ...numbers, 45,65];
numbers.push(34)
numbers2.push(42);
console.log(numbers);
console.log(numbers2);