function showProperties(obj) {
    for (key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
}

const movie = {
    title: "Man in black",
    releaseYear: 1997,
    rating: 4.5,
    director: 'Barry'
};

showProperties(movie);