const movies = require('./movies.json');

/**
 * The first one should fetch only the first ten elements of the array
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
}

/**
 * bring all the movies that contain the genre passed by parameter (they may have more than one)
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    //complete with your code
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n${firstTenMovies}\n`);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();