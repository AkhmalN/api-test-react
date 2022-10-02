import {  useEffect, useState } from 'react'
import axios from 'axios'


function Pokemon() {

   const [pokemons, setPokemons] = useState([])
   useEffect(() => {
      axios
         .get(`https://pokeapi.co/api/v2/pokemon?limit=5`)
         .then((res) => {
            const pokeDetail = res.data.results.map((el, idx) => ({
               ...el, imgUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${idx + 1 < 10 ? `00${idx + 1}` : idx + 1 < 100 ? `0${idx + 1}` : `${idx + 1}`}.png`
            }))
            // console.log(res.data);
            setPokemons(pokeDetail);
         })
         .catch(err => {
            console.log(err);
         })
   }, [])

   return (
      < div className="App" >
         {
            pokemons.map((poke, idx) => {
               return (
                  <div key={idx}>
                     <img src={poke.imgUrl} alt="pokemon" />
                     <h1>{poke.name}</h1>
                     <button>Click ME</button>
                  </div>
               )
            })
         }
      </div >
   )
}


export default Pokemon