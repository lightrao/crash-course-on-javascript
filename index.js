function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let j = 1; j <= row; j++)
            pattern += "*";
        console.log(pattern);
    }
}

showStars(3);