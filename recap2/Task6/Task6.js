'use strict';

const movies = [];

const numberOfMovies = Number(prompt('How many movies do you want to rate?'));

for (let i = 0; i < numberOfMovies; i++) {
    const title = prompt('Enter movie title:');
    const rating = Number(prompt('Enter movie rating (1-5): '));
    
    const movie = {
        title: title,
        rating: rating
    };
    movies.push(movie);
}

movies.sort((a, b) => b.rating - a.rating);

const highestRatedMovie = movies[0];

let movieList = '';
for (let movie of movies) {
    movieList += `${movie.title}: ${movie.rating}/5<br>`;
}

const output = document.querySelector('#output');
output.innerHTML = 'Movies: ' + movieList + 'Highest rated movie: ' + highestRatedMovie.title + ' with rating: ' + highestRatedMovie.rating + '/5';
