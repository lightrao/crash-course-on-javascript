function arrayFromRang(min, max) {
    const result = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}

const numbers = arrayFromRang(-10, -1);
console.log(numbers);


