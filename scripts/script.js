// Récupération des pièces depuis l'API


async function essai() {
    let url = 'http://localhost:8000/api/v1/titles?sort_by=-imdb_score'
    const response = await fetch(url)
    const films = await response.json(); // lire le corps de réponse et analyser en JSON
   
    let films1= films.results[0]
    console.log(films1.actors)
    let balisefilmsMieuxNotes = document.querySelector(".filmsMieuxNotes");
    const imageElement = document.createElement("img");
    imageElement.src = films.results[0].image_url;
    balisefilmsMieuxNotes.appendChild(imageElement);


    
}

essai()



