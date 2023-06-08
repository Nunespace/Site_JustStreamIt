/**
 * @class paramètre les boutons droite (fwd) et gauche(rew) de chaque catégorie de films 
 * pour faire avancer ou reculer les affiches des films 
 */
class Buttun {
    constructor(idLeft, idRight, category, storedPosters){
        this.idLeft = idLeft;
        this.idRight = idRight;
        this.category = category;
        this.storedPosters=storedPosters;
    }
    /**
     * Cette fonction déplace les affiches des films en changeant la source (src) des images
     * @param {number} index : à chaque clique l'index augmente ou diminue de 1
     */
    displayPosters(indexImage){
        // Affichage de 4 affiches à partir de l'image n°indexImage
        for (let i=0 ; i<4; i++) {
            const idName="image"+i+this.category
            const imageElement = document.getElementById(idName);
            imageElement.src = this.storedPosters[indexImage];
            indexImage++
        }
    }
    /**
     * index correspond au n° de l'image dans la clé du localstorage. Cette fonction ajoute ou retranche de 1 l'index à chaque click sur les boutons 
     ** et active la fonction displayPosters
     */
    clickButtun(){
        let buttunLeft=document.getElementById(this.idLeft);
        let index=0;
            buttunLeft.addEventListener("click", () =>{
            index--
                if (index>=0){
                    this.displayPosters(index);
                }else{
                    index++;
            }
        });
        let buttunRight=document.getElementById(this.idRight);
        buttunRight.addEventListener("click", () =>{
            index++;
            if (index<4){
                this.displayPosters(index);
            }
            else{
                index--;
            }
        });
    }
     
}




