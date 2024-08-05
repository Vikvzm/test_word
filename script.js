"use strict"

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    prifat: false
};


function rememberMyFilms() {
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
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB["count"] > 0 && personalMovieDB["count"] < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB["count"] >= 10 && personalMovieDB["count"] < 30) {
        console.log('Вы класический зритель');
    } else if (personalMovieDB["count"] >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(prif) {
    if (!prif) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.prifat)

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

writeYourGenres()



