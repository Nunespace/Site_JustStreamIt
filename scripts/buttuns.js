class Buttun {
    constructor(storedPosters){
        this.storedPosters = storedPosters;
    }
    displayPosters(index){
        for (let j=0 ; j<4; j++) {
            const idName="image"+j
            const imageElement = document.getElementById(idName);
            imageElement.src = this.storedPosters[index];
            index++
        }
    }
        
    clickButtun(){
        const buttunRight=document.getElementById("fwdBestMovies");
        let index=0;
        buttunRight.addEventListener("click", () =>{
            index++;
            if (index<4){
                this.displayPosters(index);
            }
            else{
                index--;
            }
        });
        let buttunLeft=document.getElementById("rewBestMovies");
        buttunLeft.addEventListener("click", () =>{
        index--
            if (index>=0){
                this.displayPosters(index);
            }else{
                index++;
                console.log("elseLeft activé"+"nb : " +index)
            }
        });
    }
     
}




