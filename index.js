function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw circle");
    };
}

const circle = new Circle(2);
console.log(circle);

console.log(Circle.name);
console.log(Circle.length); // number of arguments
console.log(Circle.constructor);
console.log(Circle.call);
console.log(Circle.apply);

// const Circle1 = new Function('radius', `
// this.radius = radius;
// this.draw = function () {
//     console.log("draw circle");
//  };
// `);
// const circle1 = new Circle1(2);
// console.log(circle1);

const anotherCircle = {};
// Circle.call(anotherCircle, 2);
Circle.apply(anotherCircle, [2]);
console.log(anotherCircle);



