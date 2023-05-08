const myArray = ['a', 'b', 'c', 'd'];

// for (let e of myArray) {
//     console.log(e);
// }

// for (let index in myArray) {
//     console.log(index, myArray[index]);
// }

myArray.forEach(function (e, index) {
    console.log(index, e);
});