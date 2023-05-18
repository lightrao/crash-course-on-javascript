// this references the object that is executing the current function
// object have method -> object itself
// regular function -> global object (window, global)

const movie = {
  title: "Your Name.",
  tags: ["animation", "drama", "fantasy"],
  showTags() {
    // this.tags.forEach(function (tag) {
    //     console.log(this.title, tag);
    // }.bind(this));

    // arrow functions inherit this from the containing function
    this.tags.forEach((tag) => console.log(this.title, tag));
  },
};
movie.showTags();

// function showThis(a, b) {
//     console.log(a, b, this);
// }
// showThis(1, 2);
// showThis.call({ name: "Neo" }, 1, 2);
// showThis.apply({ name: "Morpheus", }, [3, 4]);

// const showCustomThis = showThis.bind({ name: "Trinity" });
// showCustomThis(5, 6);
