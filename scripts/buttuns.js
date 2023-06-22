/*********************************************************************************
 * 
 * Ce fichier contient la classe nécessaire pour paramètrer les boutons 
 * droite (fwd) et gauche(rew) de chaque catégorie de films, ainsi qu'une fonction
 * pour les petits écrans qui crée un menu de navigation dans le pied de page
 * 
 *********************************************************************************/

/**
 * @class crée une liste des id (API) des films et une liste des url des affiches;
 * A chaque "click" l'indice du 1er film à afficher change.
 */
class Buttun {
    constructor(idLeft, idRight, rank){
        this.idLeft = idLeft
        this.idRight = idRight
        this.rank = rank
    }
    /**
    * crée une liste (array) "storedPosters" contenant une liste des url des affiches des 
    * 7 meilleurs films de la catégorie, ainsi qu'une liste "storedId" de leur id (API) à partir du local storage
    * @param {string} rank soit "bestMovies" ou une des catégories
    * @returns {Array<Arrays}
    */
    getPostersLocalStorage(rank){
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
    /**
     * ajoute ou retranche de 1 l'indice (index qui correspond à l'indice du 1er film à afficher) 
     * à chaque clic et active la fonction displayPosters
     */
    clickButtun(){
        let buttunLeft = document.getElementById(this.idLeft)
        let indexImg0 = 0
        buttunLeft.addEventListener("click", () =>{
            indexImg0--
            if (indexImg0 >= 0){
                this.displayPosters(indexImg0)
            // si index < 0, il repasse à 0
            }else{
                indexImg0++
            }
        })
        let buttunRight=document.getElementById(this.idRight)
        //les 4 images les plus à droite ont un indice de 3 à 6
        let iMax = 4
        // pour les petits écrans: les 7 affiches (de 0 à 6) défilent dans la balise img0 correspondante
        if (window.innerWidth <= 800){
            iMax = 7
        }
        buttunRight.addEventListener("click", () =>{
            indexImg0++
            if (indexImg0<iMax){
                this.displayPosters(indexImg0)
            }
            //si index > imax, il repasse à 0
            else{
                indexImg0--
            }
        })
    }
    /**
     * déplace les affiches des films en changeant la source (src) des 4 images
     * de la catégorie instanciée. Pour les écrans inférieurs à 800px, une seule image (img0) 
     * est affichée par catégorie.
     * @param {number} indexImg : à chaque clic l'indice de la 1ère image augmente ou diminue de 1
     */
    displayPosters(indexImg){
        const storedPosters = this.getPostersLocalStorage(this.rank)
        if (window.innerWidth <= 800){
            let posterIdHtml = this.rank + "_" + 0
            const imageElement = document.getElementById(posterIdHtml)
            imageElement.src = storedPosters[0][indexImg]
            imageElement.dataset.id = storedPosters[1][indexImg]
            indexImg++
        }else{
            // boucle sur les id (de 0 à 3) des balises img des 4 films affichés de la catégorie n°{rank} 
            for (let i=0 ; i<4; i++) {
                let posterIdHtml = this.rank + "_" + i
                const imageElement = document.getElementById(posterIdHtml)
                imageElement.src = storedPosters[0][indexImg]
                imageElement.dataset.id = storedPosters[1][indexImg]
                indexImg++
            }
        }
    }
}

/**
 * Cette fonction crée une nav dans le footer dès que
 * la largeur de l'écran est inférieur à 800px
 */
function changingScreenSize(){
    console.log("Largeur de l'écran : " + window.screen.width + "px")
    console.log("Largeur de la fenêtre : " + window.innerWidth + "px")
    const footer = document.querySelector("footer")
    if (window.innerWidth <= 800){
        let html =`
        <nav class="navbar">
            <a class="navbar__link" href="index.html">Accueil</a>
            <a class="navbar__link" href="#categories">Catégories</a>
        </nav>`
        footer.innerHTML = html
    }
    addEventListener("resize", () => {
        location.reload()
    })
}


