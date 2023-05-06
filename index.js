const numbers = [1, 2, 3, 4];

// End
// const last = numbers.pop();
// console.log(last);
// console.log(numbers);

// Beginning
// const first = numbers.shift();
// console.log(first);
// console.log(numbers);

// Middle
const numbersBeDeleted = numbers.splice(1, 2, 'a', 'b');
console.log(numbers);
console.log(numbersBeDeleted);