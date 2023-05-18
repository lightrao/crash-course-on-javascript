// this references the object that is executing the current function
// object have method -> object itself
// regular function -> global object (window, global)

const movie = {
    title: 'Your Name.',
    tags: ['animation', 'drama', 'fantasy'],
    showTags() {
        const self = this;
        this.tags.forEach(function (tag) {
            console.log(self.title, tag);
        });
    }
};
movie.showTags();


