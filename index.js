// const circle = {
//     radius: 3,
//     draw: function () {
//         console.log("draw circle");
//     },
// };

// const anotherCircle = {
//     radius: 4,
//     draw: function () {
//         console.log("draw circle");
//     },
// };

// console.log(circle);
// console.log(anotherCircle);

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log("draw circle");
        }
    };
}

const circle = createCircle(3);
console.log(circle);
const anotherCircle = createCircle(4);
console.log(circle);