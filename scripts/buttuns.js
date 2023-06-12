/**
 * @class paramètre les boutons droite (fwd) et gauche(rew) de chaque catégorie de films 
 * pour faire avancer ou reculer les affiches des films 
 */
class Buttun {
    constructor(idLeft, idRight, rank){
        this.idLeft = idLeft;
        this.idRight = idRight;
        this.rank = rank;
        // Cette fonction est dans le fichier data.js : elle crée une liste d'url des affiches à partir du local storage
        this.storedPosters = getPostersLocalStorage(this.rank);
    }
    /**
     * Cette fonction déplace les affiches des films en changeant la source (src) des images
     * @param {number} index : à chaque clique l'index augmente ou diminue de 1
     */
    displayPosters(indexImage){
        // Affichage de 4 affiches à partir de l'image n°indexImage
        console.log("Ecran : "+window.screen.width+"px")
        let iMax = 4;
        // change le défilement des images pour les écrans inférieurs à 1200px
        if (window.screen.width <= 1200){
            iMax=7
        }
        for (let i=0 ; i<iMax; i++) {
            let posterIdHtml = this.rank + "_" + i;
            const imageElement = document.getElementById(posterIdHtml)
            imageElement.src = this.storedPosters[0][indexImage]
            imageElement.dataset.id = this.storedPosters[1][indexImage]
            indexImage++

        }
        listOpenModal()
    }
    /**
     * index correspond au n° de l'image dans la clé du localstorage. Cette fonction ajoute ou retranche de 1 l'index à chaque click sur les boutons 
     ** et active la fonction displayPosters
     */
    clickButtun(){
        let buttunLeft = document.getElementById(this.idLeft)
        let index = 0
            buttunLeft.addEventListener("click", () =>{
            index--
                if (index >= 0){
                    this.displayPosters(index)
                }else{
                    index++
            }
        });
        let buttunRight=document.getElementById(this.idRight)
        let iMax = 4
        // change le défilement des images pour les écrans inférieurs à 1200px
        if (window.screen.width <= 1225){
            iMax = 7
        }
        buttunRight.addEventListener("click", () =>{
            index++
            if (index<iMax){
                this.displayPosters(index);
            }
            else{
                index--
            }
        })
    }
}

function navSmartScreen(){
    const footer = document.querySelector("footer")
    if (screen.width <= 1225){
        let html =`
        <nav class="navbar">
            <a class="navbar__link" href="index.html">Accueil</a>
            <a class="navbar__link" href="#categories">Catégories</a>
        </nav>`
        footer.innerHTML = html
    }

}


