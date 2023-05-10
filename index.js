const numbers = [1, 2, 3, 4];

// let sum = 0;
// for (number of numbers) {
//     sum += number;
// }
// console.log(sum);

// a for accumulator, c for currentValue
// a = 0, c = 1 => a = 1
// a = 1, c = 2 => a = 3
// a = 3, c = 3 => a = 6
// a = 6, c = 4 => a = 10
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);


