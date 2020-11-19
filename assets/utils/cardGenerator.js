const content = document.getElementById('card-container')

const cardGenerator = (character_data) => {
    const card = document.createElement('section')
    card.classList.add('card-character')
    card.innerHTML =
        `<figure class="img-container">
            <img class="img-character" src="${character_data.image}" alt="Foto caracter">
        </figure>
        <div class="about">
            <p>Nombre:  <span> ${character_data.name}</span></p>
            <p>Especie:  <span> ${character_data.species}</span></p>
            <p>Locación:  <span> ${character_data.location.name}</span></p>
            <p>Genero:  <span> ${character_data.gender}</span></p>
        </div>`
    content.appendChild(card)
    // return card
}