const numbers = [1, 2, 3, 4];

const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);

const sqrt = numbers.map(number => Math.sqrt(number));
console.log(sqrt);

const objects = numbers.map(number => ({ value: number }));
console.log(objects);