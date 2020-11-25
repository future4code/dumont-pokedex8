import React from "react"
import {useRequestData} from "../../hooks/useRequestData"
import {useHistory} from "react-router-dom"
import {CardContainer, AddButton, DetailsButton,ButtonsContainer, PokemonName, ImagePokemon } from "./styled"


const PokeCard = (props) => {
    const history =  useHistory()
    const pokemon = useRequestData(props.url, undefined)
    
    const detailsPokemon = (id) => {
        history.push(`/pokedex/poke-detail/${id}`)
    }
     
    return (
        <CardContainer>
            {pokemon && 
                 <div>
                  <ImagePokemon src={pokemon.sprites.front_default} alt={"pokemon"} />
                  <PokemonName>{pokemon.name}</PokemonName> 
                 </div>
            }
            
            <ButtonsContainer>
                <DetailsButton onClick={() => {detailsPokemon(pokemon.id)}}>DETALHES</DetailsButton>
                <AddButton> <strong>+</strong> POKEDEX </AddButton>   
            </ButtonsContainer>
        </CardContainer>
    )
}

export default PokeCard;