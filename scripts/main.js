/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui intialise l'affichage et lance les scripts. 
 * 
 *********************************************************************************/

/**
* Cette fonction affiche des meilleurs films d'une catégorie
* et active les boutons droite (fwd) et gauche(rew) concernés.
* @param {string} urlCategory
* @param {string} id Nom de la balise HTML id de la catégorie
* @param {number} rank 0 : meilleurs films, 1 : catégorie 1, 2 : catégorie 2, etc.
* @param {string} buttunLeft nom de la balise id du bouton gauche(rew) de la catégorie
* @param {string} buttunRight nom de la balise id du bouton droit(fwd) de la catégorie
*/
function categories(urlCategory, id, rank, buttunLeft, buttunRight){
    const filmsCategory = new Posters(urlCategory, id, rank)
    filmsCategory.recoverAndDisplayPosters()
    const buttunCategory = new Buttun(buttunLeft, buttunRight, rank)
    buttunCategory.clickButtun()
}

/**
 * Fonction principale qui lance tous les scripts
 */
function main(){
const urlBestMovie = ArrayUrl.bestMovieUrl()
const bestMovie = new BestMovie(urlBestMovie)
bestMovie.recoverPoster()
const urlbestMovies = ArrayUrl.bestMoviesUrl()
const urlCategory1 = ArrayUrl.categoryUrl("comedy")
const urlCategory2 = ArrayUrl.categoryUrl("history")
categories(urlbestMovies, "bestMovies", 0, "rewBestMovies", "fwdBestMovies")
categories(urlCategory1, "category1", 1, "rewCategory1", "fwdCategory1")
categories(urlCategory2, "category2", 2, "rewCategory2", "fwdCategory2")
}

main()





















