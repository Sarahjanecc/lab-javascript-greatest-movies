//const movies = require("./data");

// The `movies` array from the file `src/data.js`.
console.log('movies:', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesParam) {
  let directors = moviesParam.map((eachmovie)=> {
    return eachmovie.director
  })
  return directors
}

console.log(getAllDirectors(moviesParam))


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesParam) {
  let genero= moviesParam.filter ((eachMovie) => {
    if (eachMovie.director ==="Steven Spielberg" && eachMovie.genre.includes("drama"))
    return genero
  } )
}
console.log (howManyMovies (movies))


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movieScore) {
  let totalScore = movieScore.reduce ((acc, elemen) => {
    if (elemen.score !== undefined) {
      return acc + elemen.score
    } else {
      return acc
    }
return acc + elemen.score
  },0)
let avg = totalscore/ movieScore.length
let totaldig = avg.tofixed(2)
let totaldigNum = parseFloat(totaldig)

return totaldigNum

console.log (scoresAverage(movieScore))


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesParDram) {}
let genero= moviesParDram.filter ((eachMovie) => {
  if (eachMovie.genre ==="drama")
  return genero
} )
}
let avg = totalscoredrama/ movieScore.length
let totaldram = avg.tofixed(2)
let totaldramscore= parseFloat(totaldram)

return totaldramscore

console.log (scoresAverage(movieScore))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(unsortedMovies) {
  return unsortedMovies.sort((a, b) => a.year - b.year);
}

console.log('sorted Movies', orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(unsortedMovies) {
  const sizeOfArray = 20;
  return unsortedMovies.sort((a, b) => a.title - b.title).slice(0, sizeOfArray);
}

console.log('Alphabetic Order Movies', orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



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
}
