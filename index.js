const movies = [
    { title: "The Shawshank Redemption ", year: 1994, rating: 4.6 },
    { title: "Pulp Fiction ", year: 1994, rating: 4.4 },
    { title: "Forrest Gump", year: 1994, rating: 4.5 },
    { title: "The Dark Knight", year: 2008, rating: 4.3 },
    { title: "Spirited Away", year: 2001, rating: 4.5 },
];

// all movies in 1994 with rating >= 4.5
// sort by rating in decending order
// pick their title to console

function choseMovieByTitle(moviesArray) {
    return moviesArray
        .filter(movie => (movie.year === 1994 && movie.rating >= 4.5))
        .sort((a, b) => (a.rating - b.rating))
        .reverse()
        .map(movie => movie.title);
}
console.log(choseMovieByTitle(movies));
