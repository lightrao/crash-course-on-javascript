const numbers = [1, 2, 3, 4, 1, 1];

function countOccurrences(array, searchElement) {
    // let counter = 0;
    // for (let element of array) {
    //     if (element === searchElement) {
    //         counter++;
    //     }
    // }
    // return counter;

    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        return accumulator + occurence;
    }, 0);
}

const count = countOccurrences(numbers, 1);
console.log(count);
