const numbers = [3, 4];
// numbers = [];

// End
numbers.push(5, 6);
console.log(numbers);

// Beginning
numbers.unshift(1, 2);
console.log(numbers);

// Middle
numbers.splice(3, 0, 3.3, 3.4);
console.log(numbers);