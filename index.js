// Falsy: undefined, null, '', false, 0, NaN

function countTruthy(array) {
    let counter = 0;
    for (element of array) {
        if (element) counter++;
    }
    return counter;
}

const myArray = [1, 2, 3, undefined, '', false, 8, true];
console.log(countTruthy(myArray));
