function sum(...args) {
    // console.log(args);

    // let total = 0;
    // for (e of args) {
    //     total += e;
    // }
    // return total;

    return args.reduce((a, c) => (a + c));
}
console.log(sum(1, 2, 3, 4, 5));

function realPrice(discount, ...prices) {
    // console.log(discount);
    // console.log(prices);

    const total = prices.reduce((a, c) => (a + c));
    return total * (1 - discount);
}
console.log(realPrice(0.1, 20, 30));
