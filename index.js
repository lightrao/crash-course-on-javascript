const circle = {
    radius: 1,
    draw() {
        console.log("draw circle");
    }
};

// for (key in circle) {
//     console.log(key, circle[key]);
// }


// console.log(Object.keys(circle));

// for (key of Object.keys(circle)) {
//     console.log(key);
// }

// // let x = { value: 1 };
// let x = new Object();
// x.value = 1;


console.log('radius' in circle);
console.log('draw' in circle);
console.log('area' in circle)





