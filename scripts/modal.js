// Ouvre la modale quand l'utilisateur clique sur l'image
function listOpenModal(){
  const listOpenModal = document.querySelectorAll(".poster")
  for (let i = 0; i < listOpenModal.length; i++){
    const openModal = listOpenModal[i]
    openModal.onclick = function(event) {  
    moviedata(openModal.dataset.id)
      }
  }
}

/**
* Cette fonction lance une requête fetch auprès de l'API pour récupérer les données du film
* puis crée des évènement pour ouvrir et fermer la modale 
* @param {number} id extrait de l'API
*/
async function moviedata(id){
  const url = `http://localhost:8000/api/v1/titles/${id}`
  try{
    const response = await fetch(url)
    const data = await response.json()
    const poster = data.image_url
    const title = data.title
    const genre = data.genres
    const year = data.year
    const rated = data.rated
    const imdbScore = data.imdb_score
    const director = data.directors
    const actors = data.actors
    const duration = data.duration + " min"
    const country = data.countries
    let resultAtTheBoxOffice = data.worldwide_gross_income
    if (resultAtTheBoxOffice == null){
      resultAtTheBoxOffice = "inconnu"
    }
    const description = data.long_description;
    let divModal = document.getElementById("modal")
    let html =`
    <!-- The Modal -->
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
      <span id="close">&otimes;</span> 
        <img src="${poster}" alt="image du film">
        <ul>
        <li><strong>Titre : </strong>${title}</li>
        <li><strong>Genre : </strong>${genre}</li>
        <li><strong>Réalisateur : </strong>${director}</li>
        <li><strong>Date de sortie : </strong>${year}</li>
        <li><strong>Note : </strong>${rated}</li>
        <li><strong>Score Imdb : </strong>${imdbScore}</li>
        <li><strong>Acteurs : </strong>${actors}</li>
        <li><strong>Durée : </strong>${duration}</li>
        <li><strong>Pays : </strong>${country}</li>
        <li><strong>Résultat au Box Office : </strong>${resultAtTheBoxOffice}</li>
        <li><strong>Résumé : </strong>${description}</li>
        </ul>
    </div>`
    divModal.innerHTML=html
    const modal = document.getElementById("myModal")
    modal.style.display = "block";
    const section = document.querySelector("section")
    section.style.backgroundColor = "rgba(0,0,0,0.8)"
    // Ferme la modale quand on clique sur la x
    const close = document.getElementById("close");
    close.addEventListener("click", () =>{
      modal.style.display = "none"
      section.style.backgroundColor = "black"
    })
    // Ferme la modale quand l'utilisateur clique n'importe où sur la page
    window.onclick = function(event) {
      if (event.target == modal) {
      modal.style.display = "none"
      section.style.backgroundColor = "black"
      }
    } 
    } catch {
        console.log("Les informations de ce film n'ont pas pu être récupérées.")
      }
}






