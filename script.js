"use strict"

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    prifat: false
};
const movie = prompt('Один из последних просмотренных фильмов?', '');
const rating = prompt('На сколько оцените его?', '');
personalMovieDB.movies[movie] = rating;

console.log(personalMovieDB)