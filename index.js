// Factory Function
// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log("draw circle");
//         }
//     };
// }

// const circle = createCircle(3);
// console.log(circle);
// const anotherCircle = createCircle(4);
// console.log(circle);

// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

// Constructor Functions
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw circle");
    };
}

// javascript new operator:
// 1. new operator first creates an empty object
// 2. new will set "this" to point to the object, and add properties with constructor
// 3. new will return the object from consstructor function
const circle = new Circle(3);
console.log(circle);
const anotherCircle = new Circle(4);
console.log(anotherCircle);