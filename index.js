// let x=0;
// var y=1;

// var => function-scoped
// ES6: let, const => block-scoped
// function start() {
//     for (/* let */var i = 0; i < 5; i++) {
//         console.log(i);
//         if (true) {
//             /* var */let color = 'red';
//         }
//     }
//     console.log(i);
//     console.log(color);
// }
// start();
// // console.log(i);

var myColor = 'red';
let myAge = 30;
console.log(window.myColor);
console.log(window.myAge);


