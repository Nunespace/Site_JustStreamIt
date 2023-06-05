class ArrayUrl{
    static bestMoviesUrl(){
        const url1 = 'http://localhost:8000/api/v1/titles?sort_by=-imdb_score&page=1'
        const url2='http://localhost:8000/api/v1/titles?sort_by=-imdb_score&page=2'
        return [url1, url2]
    }
    static comedyUrl(){
        const url1 = 'http://localhost:8000/api/v1/titles?sort_by=-imdb_score&genre=comedy&page=1'
        const url2='http://localhost:8000/api/v1/titles?sort_by=-imdb_score&genre=comedy&page=2'
        return [url1, url2]
    }
}

class Posters{
    constructor(url, id, rank) {
        this.url = url;
        this.id = id;
        this.rank = rank;
     }
    async recoverAndDisplayPosters() {
    try{
            let url = this.url[0]
            const response = await fetch(url)
            const page1 = await response.json(); 
            let films =page1.results;
            let url2 = this.url[1]
            const response2 = await fetch(url2)
            const page2 = await response2.json();
            let filmsPage2 = page2.results;
            for (let j =0; j < filmsPage2.length; j++){
                films.push(filmsPage2[j])
            }
            let id=this.id
            let rank= this.rank
            this.displayPosters(films, id, rank)
            for (let i=0; i<7; i++){
                const imageNumber = i+rank;
                const nomImage ="image" + imageNumber;
                console.log("rr"+nomImage)
                let Image = JSON.stringify(films[i].image_url);
            // Stockage des urls des affiches dans le localStorage
            window.localStorage.setItem(nomImage, Image);
            }
            
        }catch{
            alert("Désolé, les données des films n'ont pas pu être récupérées. Essayez d'actualiser la page.")
        }
    }
    displayPosters(films, id, rank){
        for (let i=0; i<4; i++) {
            let film= films[i]
            const container = document.getElementById(id);
            const imageNumber = i+rank;
            const nomImage ="image" + imageNumber;
            const imageElement = document.createElement("img");
            imageElement.className="poster"
            imageElement.alt=`Affiche du film ${i}`
            imageElement.src = film.image_url;
            imageElement.id= nomImage;
            container.appendChild(imageElement);

        }
    }
}

/**
 * Cette fonction crée une liste (array) des url des affiches des films à partir du local storage
 */
function getPostersLocalStorage(){
    let storedPosters = []
    for (let i=0; i<7; i++){
        let nomImage = "image"+i;
        let film = window.localStorage.getItem(nomImage);
        film = JSON.parse(film)
        storedPosters.push(film)
    }
    return storedPosters
}