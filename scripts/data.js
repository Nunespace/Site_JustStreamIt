/*********************************************************************************
 * 
 * Ce fichier contient les classes nécessaires pour récupérer les données de l'API
 * afficher les affiches (4 par catégorie) et enregistrer les données 
 * dans le local storage
 * 
 *********************************************************************************/

/**
 * @class retourne les URL des requêtes auprès de l'API pour une catégorie
 */
class ArrayUrl{
    static bestMovieUrl(){
        const url = "http://localhost:8000/api/v1/titles?sort_by=-imdb_score&page=1"
        return url
    }
    static bestMoviesUrl(){
        const url1 = "http://localhost:8000/api/v1/titles?sort_by=-imdb_score&page=1"
        const url2 ="http://localhost:8000/api/v1/titles?sort_by=-imdb_score&page=2"
        return [url1, url2]
    }
    static categoryUrl(genre){
        const url1 = `http://localhost:8000/api/v1/titles?sort_by=-imdb_score&genre=${genre}&page=1`
        const url2 =`http://localhost:8000/api/v1/titles?sort_by=-imdb_score&genre=${genre}&page=2`
        return [url1, url2]
    }
}

/**
 * @class contient les méthodes nécessaires pour récupérer les url des affiches des films
 * et afficher 4 images pour la catégorie instanciée
 */
class Posters{
    constructor(url, id, rank) {
        this.url = url
        this.id = id
        this.rank = rank
        this.storedPosters = getPostersLocalStorage(this.rank)
    }
    async recoverAndDisplayPosters() {
        try{
            let url = this.url[0]
            const response = await fetch(url)
            const page1 = await response.json()
            let films = page1.results
            let url2 = this.url[1]
            const response2 = await fetch(url2)
            const page2 = await response2.json()
            let filmsPage2 = page2.results
            for (let j =0 ; j < filmsPage2.length; j++){
                films.push(filmsPage2[j])
            }
            if (this.id === "bestMovies"){
                films.shift()
            }
            const listIdPosters = []
            for (let i = 0; i < 7; i++){
                listIdPosters.push(films[i].id)
            }
            const rank = this.rank
            this.displayPosters()                                                                                        
            // activation de la fonction du module modal.js
            listOpenModal()
            
            
            for (let i=0; i<7; i++){
                // Stockage des urls des affiches dans le localStorage
                const imageName = "image" + rank + i
                let image = JSON.stringify(films[i].image_url)
                window.localStorage.setItem(imageName, image)
                // Stockage des id (API) des films dans le localStorage
                const idApiName = "id" + rank + "_" + i
                let idApi = JSON.stringify(listIdPosters[i])
                window.localStorage.setItem(idApiName, idApi)
            }
        }catch{
            alert("Désolé, les affiches des films n'ont pas pu être récupérées. Essayez d'actualiser la page.")
        }
    }
    displayPosters(){
        const posters = this.storedPosters[0]
        const idFilms = this.storedPosters[1]
        for (let i=0; i<4; i++) {
            const idPoster = idFilms[i]
            const container = document.getElementById(this.id)
            const imageElement = document.createElement("img")
            imageElement.className="poster"
            imageElement.alt=`Affiche du film ${i}`
            imageElement.src = posters[i]
            imageElement.id= this.rank+"_"+i
            imageElement.dataset.id = idPoster;
            container.appendChild(imageElement)
        }
    }
}

/**
 * @class contient les méthodes nécessaires pour récupérer l'url de l'affiche du meilleur film
 * et pour l'afficher
 */
class BestMovie{
    constructor(url){
        this.url=url
    }
    async recoverPoster() {
        try{
            let url = this.url
            const response = await fetch(url)
            const page1 = await response.json()
            let films =page1.results
            const id = films[0].id
            // Stockage de l'url de l'affiche dans le localStorage
            const nomImage ="imageMeilleur_film"
            let image = JSON.stringify(films[0].image_url)
            window.localStorage.setItem(nomImage, image)
            this.displayPoster(id)
        }catch{
            alert("Désolé, l'affiche du meilleur film n'a pas pu être récupérée. Essayez d'actualiser la page.")
        }
    }
    displayPoster(id){
        let poster = window.localStorage.getItem("imageMeilleur_film")
        console.log(poster)
        poster = JSON.parse(poster)
        const container = document.getElementById("bestMovie")
        const imageElement = document.createElement("img")
        imageElement.className ="poster"
        imageElement.alt = "Affiche du meilleur film"
        imageElement.src = poster
        imageElement.id = "bestMovie_"+0
        imageElement.dataset.id = id
        container.appendChild(imageElement)
    }
}

/**
* Cette fonction crée une liste (array) "storedPosters" contenant les url des affiches des 
* 7 meilleurs films de la catégorie, ainsi qu'une liste de leur id (API) à partir du local storage
* @param {string} rank soit bestMovies ou une des catégories
* @param {string} keyLocalStorage pour choisir une liste
*/
function getPostersLocalStorage(rank){
    let storedPosters = []
    let storedId = []
    for (let i = 0; i < 7; i++){
        let imageName = "image" + rank + i
        let poster = window.localStorage.getItem(imageName)
        poster = JSON.parse(poster)
        storedPosters.push(poster)
        const idApiName = "id" + rank + "_" + i
        let idFilm = window.localStorage.getItem(idApiName)
        idFilm = JSON.parse(idFilm)
        storedId.push(idFilm)
    }
    
    return [storedPosters, storedId]
}