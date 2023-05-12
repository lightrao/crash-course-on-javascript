const numbers = [1, 2, 3, 4, 1, 2, 3, 4];

function except(array, excluded) {
    // for (let e of excluded) {
    //     array = array.filter(n => n !== e);
    // }
    // return array;

    const output = [];
    for (let e of array) {
        if (!excluded.includes(e)) output.push(e);
    }
    return output;
}

console.log(except(numbers, [2, 3]))

