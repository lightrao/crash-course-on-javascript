// this: the object that is executing the current function
// object have method -> object itself
// regular function -> global object (window, global)

// const video = {
//     title: 'How to make a cake',
//     play() {
//         console.log(this);
//     }
// };
// video.play();

// video.stop = function () {
//     console.log(this);
// };
// video.stop();

// function showThis() {
//     console.log(this);
// }
// showThis();

// function Video(title) {
//     this.title = title;
//     console.log(this);
// }
// const video2 = new Video('b')

const movie = {
    title: 'Your Name.',
    tags: ['animation', 'drama', 'fantasy'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this);
    }
};
movie.showTags();


