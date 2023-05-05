const ranges = [
    { from: 0, to: 10, tip: "Inexpensive" },
    { from: 11, to: 20, tip: "Moderate" },
    { from: 21, to: 50, tip: "Expensive" }
];

function checkPrice(price, ranges) {
    let tip = 'No matching range found';
    for (let i = 0; i < ranges.length; i++) {
        const r = ranges[i];
        if (price >= r.from && price <= r.to) {
            tip = r.tip;
            break;
        }
    }
    console.log(`Price: ${tip}`);
}

checkPrice(11, ranges)



