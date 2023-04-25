function showNumbers(input) {
    for (let i = 1; i <= 10; ++i) {
        const message = (i % 2 === 0) ? "EVEN" : "ODD";
        console.log(i, message);
    }
}

showNumbers(10);