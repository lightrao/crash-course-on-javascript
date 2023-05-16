let x = 1;
x = 'hi';

function sum(/* a, b */) {
    let total = 0;
    for (key in arguments) {
        total += arguments[key];
    }
    return total;

    // console.log(arguments);
    // return a + b;
}
console.log(sum(1, 2));
console.log(sum(1));
console.log(sum(1, 2, 3, 4));