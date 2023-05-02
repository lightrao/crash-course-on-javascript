const circle = {
    radius: 1,
    draw() {
        console.log("draw circle");
    }
};
console.log(circle);


// const anotherCircle = {};
// for (let key in circle) {
//     anotherCircle[key] = circle[key];
// }
// console.log(anotherCircle)

// anotherCircle['radius'] = circle['radius'];
// anotherCircle['draw'] = circle['draw'];
// console.log(anotherCircle)

// const anotherCircle = Object.assign({}, circle);
// console.log(anotherCircle)

const anotherCircle = { ...circle };
console.log(anotherCircle)





