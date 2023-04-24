// Speed Limit = 70km/h
// every 5km/h above deduct 1 point
// deduct 12 points lead to license suspended 

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint * 1) {
        console.log("Ok.");
    } else {
        const points = Math.floor((speed - speedLimit) / 5);
        if (points > 12) {
            console.log("License suspended!");
        } else {
            console.log("Points deducted:", points);
        }
    }
}

for (let speed = 65; speed <= 140; speed += 5) {
    checkSpeed(speed);
}