/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui intialise l'affichage et lance les scripts. 
 * 
 *********************************************************************************/

/**
 * Affichage des meilleurs films et activaton des boutons droite et gauche concernés
 */
const idBestMovies = "bestMovies"
let urlbestMovies = ArrayUrl.bestMoviesUrl()
const bestFilms = new Posters(urlbestMovies, idBestMovies, 0)

let storedPosters = getPostersLocalStorage()


const buttunBestMovies = new Buttun(storedPosters)
bestFilms.recoverAndDisplayPosters()
buttunBestMovies.clickButtun()

/**
 * Affichage des meilleurs films de la catégorie Comédie et activaton des boutons droite et gauche concernés
*/
const idComedy = "comedy"
let urlComedy = ArrayUrl.comedyUrl()
const filmsComedy = new Posters(urlComedy, idComedy, 7)
filmsComedy.recoverAndDisplayPosters()

/*
storedPosters = getPostersLocalStorage()

const buttunComedy = new Buttun(storedPosters)
films.recoverAndDisplayPosters()
buttunBestMovies.clickButtun()
*/


















