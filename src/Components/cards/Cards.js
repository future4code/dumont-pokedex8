import React from "react"
//import { baseUrl } from "../../constants/baseUrl"
import {useRequestData} from "../../hooks/useRequestData"
import {CardContainer, AddButton, DetailsButton,ButtonsContainer, PokemonName, ImagePokemon } from "./styled"

const PokeCard = (props) => {
    const pokemon = useRequestData(props.url, undefined)
    
    return(
        <CardContainer>
            {pokemon && 
             <div>
            <ImagePokemon src={pokemon.sprites.front_default} alt={"pokemon"} />
            <PokemonName>{pokemon.name}</PokemonName>
            </div>
             }
            
            <ButtonsContainer>
                <AddButton>+ POKEDEX</AddButton>
                <DetailsButton>DETALHES</DetailsButton>
            </ButtonsContainer>
        </CardContainer>
    )
}

export default PokeCard