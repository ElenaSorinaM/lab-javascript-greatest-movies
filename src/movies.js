const movies = require('../src/data');
//console.log(movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(element => element.director)
  return directors;
};
console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  const movies = moviesArray.filter(
    (element) => 
    element.director === "Steven Spielberg" && element.genre.includes('Drama')
    );
  return movies.length;
};
console.log(howManyMovies(movies));         

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const total = moviesArray.reduce((acc, el) => {
    if (b.score !== '' && !b.score){
      return a + b.score;
    }
  }, 0);
  return total / movies.length;
};
console.log(scoresAverage(movies));



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const drama = moviesArray.filter(element => element.genre.includes("Drama"));
    
  let scoreDrama = drama.reduce((acc, el) => acc + el.score, 0);
  return scoreDrama/drama.length.toFixed(2);
}
const averageDrama = dramaMoviesScore(movies);
console.log(averageDrama);                                // --> 8.317297297297278


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedByYear = [...moviesArray].sort((a, b) => {
    if (a.year === b.year)
      return a.title.toUpperCase() < b.title.toUpperCase()
        ? -1
        : a.title.toUpperCase() > b.title.toUpperCase()
        ? 1
        : 0;
    return a.year - b.year;
  });
  return sortedByYear;
}
const newOrder = orderByYear(movies);
console.log(newOrder);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  moviesArray.sort((x,y) => (x.title > y.title ? -1 : 0));
  return moviesArray.slice(0, 20);
};
console.log(orderAlphabetically(movies));


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
};
