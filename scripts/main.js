/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui intialise l'affichage et lance les scripts. 
 * 
 *********************************************************************************/

const urlBestMovie = ArrayUrl.bestMovieUrl()
const bestMovie = new BestMovie(urlBestMovie)
bestMovie.recoverPoster()

 //Affichage des meilleurs films et activaton des boutons droite et gauche concernés//

const idBestMovies = "bestMovies"
const rankBestMovies = 0
let urlbestMovies = ArrayUrl.bestMoviesUrl()
let storedPostersBestMovies = getPostersLocalStorage(rankBestMovies)
const bestFilms = new Posters(urlbestMovies, idBestMovies, rankBestMovies, "bestMovies", storedPostersBestMovies)
bestFilms.recoverAndDisplayPosters()
const buttunBestMovies = new Buttun("rewBestMovies", "fwdBestMovies", rankBestMovies, storedPostersBestMovies)
buttunBestMovies.clickButtun()


//Affichage des meilleurs films de la catégorie 1 et active les boutons droite (fwd) et gauche(rew) concernés.//

const idCategory1 = "category1"
const rankCategory1 = 1
const category1 = "comedy"
let urlCategory1 = ArrayUrl.categoryUrl(category1)
let storedPostersCategory1 = getPostersLocalStorage(rankCategory1)
const filmsCategory1 = new Posters(urlCategory1, idCategory1, rankCategory1, category1, storedPostersCategory1)
filmsCategory1.recoverAndDisplayPosters()
const buttunCategory1 = new Buttun("rewCategory1", "fwdCategory1", rankCategory1, storedPostersCategory1)
buttunCategory1.clickButtun()






















