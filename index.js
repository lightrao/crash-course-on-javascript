// const numbers = [4, 2, 3, 1];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

const numbers = [4, 2, 3, 1];
numbers.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    if (a === b) return 0;
});
console.log(numbers);

// [4, 2, 3, 1]
// [2, 4, 3, 1]
// [2, 3, 4, 1]
// [2, 3, 1, 4]
// [2, 3, 1, 4]
// [2, 1, 3, 4]
// [1, 2, 3, 4]

// const courses = [
//     { id: 1, name: "Node.js" },
//     { id: 2, name: "javascript" },
//     { id: 3, name: "Solidity" },
//     { id: 4, name: "python" }
// ];
// courses.sort(function (a, b) {
//     if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
//     if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
//     return 0;
// });
// console.log(courses);