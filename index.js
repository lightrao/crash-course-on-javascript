let i = 1;

while (i <= 10) {
    // if (i === 5) break;
    if (i === 5) {
        i++;
        console.log('*');
        continue;
    }

    console.log(i);
    i++;
}