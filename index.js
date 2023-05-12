const numbers = [1, 2, 3, 4];

function includes(array, searchElement) {
    for (e of array) {
        if (e === searchElement) return true;
    }
    return false;
}

console.log(includes(numbers, 44))

