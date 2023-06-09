/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui initialise l'affichage des films et lance les scripts. 
 * 
 *********************************************************************************/

/**
* Cette fonction affiche les meilleurs films d'une catégorie
* et active les boutons droite (fwd) et gauche(rew) concernés en faisant appel
* aux classes de data.js et buttuns.js
* @param {string} urlCategory
* @param {string} id de la balise html div de la catégorie
* @param {number} rank "Films les mieux notés" : 0, catégorie 1 : 1, catégorie 2 : 2, etc.
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
    const urlCategory3 = ArrayUrl.categoryUrl("drama")
    categories(urlbestMovies, "bestMovies", 0, "rewBestMovies", "fwdBestMovies")
    categories(urlCategory1, "category1", 1, "rewCategory1", "fwdCategory1")
    categories(urlCategory2, "category2", 2, "rewCategory2", "fwdCategory2")
    categories(urlCategory3, "category3", 3, "rewCategory3", "fwdCategory3")
    changingScreenSize()
}

main()




















