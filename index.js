const numbers = [1, 2, 3, 4, 1, 1, 5];

function getMax(array) {
    if (array.length === 0) {
        return undefined;
    }

    // let max = array[0];
    // for (element of array) {
    //     if (element > max) {
    //         max = element;
    //     }
    // }
    // return max;

    return array.reduce((accumulator, current) => {
        if (current > accumulator) {
            return current;
        }
        return accumulator;
    });
}

const max = getMax(numbers);
console.log(max);