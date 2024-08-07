"use strict"


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    prifat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const movie = prompt('Один из последних просмотренных фильмов?', '').trim();
            const rating = prompt('На сколько оцените его?', '');
            if (movie && rating && movie.length < 50) {
                personalMovieDB.movies[movie] = rating;
            } else {
                i--;
                console.log('Вы ввели пустую строку, попробуйте еще раз')
            }
            // for (let j = 0; j < 1; j++) {
            //     const movie = prompt('Один из последних просмотренных фильмов?', '').trim();
            //     const rating = prompt('На сколько оцените его?', '');
            //     if (movie && rating && movie.length < 50) {
            //         personalMovieDB.movies[movie] = rating;
            //     } else {
            //         j--;
            //         console.log('Вы ввели пустую строку, попробуйте еще раз')
            //     }
            // }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB["count"] > 0 && personalMovieDB["count"] < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB["count"] >= 10 && personalMovieDB["count"] < 30) {
            console.log('Вы класический зритель');
        } else if (personalMovieDB["count"] >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function (prif) {
        if (!prif) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (genre) {
                personalMovieDB.genres[i - 1] = genre;

            } else {
                console.log('Вы ввели некоректные данные или пустую строку');
                i--;
            }

        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    writeYourGenres2: function () {
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Ведите Ваши любимые жанры через запятую`, '').toLowerCase();
            if (genres) {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort()
            } else {
                console.log('Вы ввели некоректные данные или пустую строку');
                i--;
            }

        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (!personalMovieDB.prifat) {
            personalMovieDB.prifat = true;
        } else {
            personalMovieDB.prifat = false;
        }
    }
};
// personalMovieDB.start()
// personalMovieDB.rememberMyFilms()
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB(personalMovieDB.prifat)
// personalMovieDB.writeYourGenres()



