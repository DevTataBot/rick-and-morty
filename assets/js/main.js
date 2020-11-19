// const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'
const characters = []
const pagesApi = 34
// const apiPage = '?page=:page'
const alive = document.getElementById('alive')
const dead = document.getElementById('dead')
const unknown = document.getElementById('unknown')

const searchCharacter = async (page) => {
    try{
        console.log(page)
        const data = await fetchData(`${API}?page=${page}`)
        // const character = await fetchData(`${API}${data.results.status}`)
        // const origin = await fetchData(character.origin.url)
        // console.log(character)
        data.results.map(personaje => { 
            cardGenerator(personaje)
        })
            // console.log(result)
    }catch(error){
        console.log(error)
    }
}
(function() {
    for (let i = 1; i <= pagesApi; i++) {
      searchCharacter(i);
    }
  })();
