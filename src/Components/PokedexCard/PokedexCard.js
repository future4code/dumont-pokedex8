import React, {useContext} from "react"
import {useRequestData} from "../../hooks/useRequestData"
import {useHistory} from "react-router-dom"
import GlobalStateContext from "../../Global/GlobalStateContext"

const PokedexCard = (props) => {
    const { states, setters } = useContext(GlobalStateContext)
    const pokemon = useRequestData(props.url, undefined)
    const history =  useHistory()

    const goToDetailsPokemon = (id) => {
        history.push(`/pokedex/poke-detail/${id}`)
    }
  

    const removeItemFromPokedex = (itemToRemove) => {
        const index = states.pokedex.findIndex((item) => item.name === itemToRemove.name)
        let newPokedex = [...states.pokedex]
        newPokedex.splice(index, 1)
        setters.setPokedex(newPokedex)
        console.log(index)
    }

    return (
        
            <div>
                 {pokemon && 
                 <div>
                  <img src={pokemon.sprites.front_default} alt={"pokemon"} />
                  <p>{pokemon.name}</p> 
                 
                 <div>
                 <button onClick={() => {goToDetailsPokemon(pokemon.id)}}>DETALHES</button>
                 <button onClick={() => {removeItemFromPokedex(pokemon.id)}}> remover </button>   
             </div>
             </div>
            }
                     
                       
                
                
               
                
                
            </div>
        


    )
}

export default PokedexCard