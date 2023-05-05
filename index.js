function showNumbers(input) {
    for (let i = 1; i <= input; ++i) {
        const message = (i % 2 === 0) ? "EVEN" : "ODD";
        console.log(i, message);
    }
}

showNumbers(10);