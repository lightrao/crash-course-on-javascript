const numbers = [1, 2, 3, 4];
console.log(numbers.indexOf(2));
console.log(numbers.indexOf(7));
console.log(numbers.indexOf('2'));

const numbers2 = [1, 2, 3, 1, 1, 4];
console.log(numbers2.indexOf(1));
console.log(numbers2.lastIndexOf(1));

// numbers2.indexOf(1) !== -1
if (numbers2.includes(1)) {
    console.log("numbers2 include 1.");
}

console.log(numbers2.indexOf(1, 1));