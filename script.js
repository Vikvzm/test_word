"use strict"

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    prifat: false
};

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 1; j++) {
        const movie = prompt('Один из последних просмотренных фильмов?', '');
        const rating = prompt('На сколько оцените его?', '');
        if (movie && rating && movie.length < 50) {
            personalMovieDB.movies[movie] = rating;
        } else {
            j--;
            console.log('Вы ввели пустую строку, попробуйте еще раз')
        }
    }
}

if (personalMovieDB["count"] > 0 && personalMovieDB["count"] < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB["count"] >= 10 && personalMovieDB["count"] < 30) {
    console.log('Вы класический зритель');
} else if (personalMovieDB["count"] >= 30) {
    console.log('Вы киноман')
} else {
    console.log('Произошла ошибка')
}


console.log(personalMovieDB)