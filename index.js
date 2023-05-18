// this: the object that is executing the current function
// object have method -> object itself
// regular function -> global object (window, global)

// const video = {
//     title: 'a',
//     play() {
//         console.log(this);
//     }
// };
// video.play();

// video.stop = function () {
//     console.log(this);
// };
// video.stop();

function showThis() {
    console.log(this);
}
showThis();


