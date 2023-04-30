// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log("draw circle");
        }
    };
}
const circle = createCircle(2);
console.log(circle.constructor);

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () { console.log("draw circle"); };
}
const anotherCircle = new Circle(2);
console.log(anotherCircle.constructor);

const person = {};
// const person = new Object();
const s = 'hello';
// const s = new String('hello');
const b = true;
// const b = new Boolean(true);
const n = 3
// const n = new Number(3);
