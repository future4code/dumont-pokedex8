import React from "react"
import {useRequestData} from "../../hooks/useRequestData"
import {useHistory} from "react-router-dom"
import {CardContainer, AddButton, DetailsButton,ButtonsContainer, PokemonName, ImagePokemon } from "./styled"


const PokeCard = (props) => {
    const history =  useHistory()
    const pokemon = useRequestData(props.url, undefined)


    const goToDetailsPokemon = (id) => {
        history.push(`/pokedex/poke-detail/${id}`)
    }
     
    return (
        <CardContainer>
            {pokemon && 
                 <div>
                  <ImagePokemon src={pokemon.sprites.front_default} alt={"pokemon"} />
                  <PokemonName>{pokemon.name}</PokemonName> 
                 
                 <ButtonsContainer>
                 <DetailsButton onClick={() => {goToDetailsPokemon(pokemon.id)}}>DETALHES</DetailsButton>
                 <AddButton onClick={props.addItemToPokedex}> <strong>+</strong> POKEDEX </AddButton>   
             </ButtonsContainer>
             </div>
            }
            
            
        </CardContainer>
    )
}

export default PokeCard