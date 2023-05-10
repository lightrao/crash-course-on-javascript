const number = [1, -1, 2, 3];

const allPositive = number.every(function (value) {
    console.log(value);
    return value > 0;
});
console.log(allPositive);

const number2 = [-1, -2, -3, 4, 5, 6, -7];
const atLeastOnePositive = number2.some(function (value) {
    console.log(value);
    return value > 0;
});
console.log(atLeastOnePositive);