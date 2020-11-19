// const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'
const characters = []
const pagesApi = 20
const alive = document.getElementById('alive')
const dead = document.getElementById('dead')
const unknown = document.getElementById('unknown')

const searchCharacter = async (page) => {
    try{
        console.log(page)
        const data = await fetchData(`${API}?page=${page}`)
        data.results.map(personaje => { 
            cardGenerator(personaje)
        })
    }catch(error){
        console.log(error)
    }
}
(function() {
    for (let i = 1; i <= pagesApi; i++) {
      searchCharacter(i);
    }
  })();
