// Ouvre la modale quand l'utilisateur clique sur l'image
const openModal = document.getElementById("bestMovie");
openModal.onclick = function(event) {
const id = event.explicitOriginalTarget.id;  
moviedata(id);
}

async function moviedata(id){
  const url = `http://localhost:8000/api/v1/titles/${id}`
  try{
    const response = await fetch(url)
    const data = await response.json(); 
    const poster = data.image_url;
    const title = data.title;
    const genre = data.genres;
    const year = data.year
    const rated = data.rated;
    const imdbScore = data.imdb_score;
    const director = data.directors;
    const actors = data.actors;
    const duration = data.duration + " min";
    const country = data.countries;
    const resultAtTheBoxOffice = data.worldwide_gross_income;
    const description = data.description;
    let divModal = document.getElementById("modal");
    let html =`
    <!-- The Modal -->
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
      <div id="close">&otimes;</div>
      <h1>${title}</h1>
        
        <img src="${poster}" alt="image du film">
        <ul>
        <li><strong>${genre} </strong>de ${director} (${year})</li>
        <li>Note : ${rated}</li>
        <li>Score Imdb : ${imdbScore}</li>
        <li><strong>Avec : </strong>${actors}</li>
        <li><strong>Durée : ${duration}</strong></li>
        <li><strong>Pays :</strong>${country}</li>
        <li>Résultat au Box Office : ${resultAtTheBoxOffice}</li>
        </ul>
        <div class="bloc_titre"><strong>Résumé</strong></div>
        <p>${description}</p>
        </div>
    </div>`
    divModal.innerHTML=html
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
    const close = document.getElementById("close");
    // Ferme la modale quand on clique sur la x
    close.addEventListener("click", () =>{
      modal.style.display = "none";
    })
    // Ferme la modale quand l'utilisateur clique n'importe où sur la page
    window.onclick = function(event) {
      if (event.target == modal) {
      modal.style.display = "none";
      }
    } 
    } catch {
        console.log("Les informations de ce film n'ont pas pu être récupérées.")
      }
}






