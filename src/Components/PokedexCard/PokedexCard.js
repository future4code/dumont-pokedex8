import React from "react"
import {useRequestData} from "../../hooks/useRequestData"
import {useHistory} from "react-router-dom"
import { CardContainer, ImagePokemon, PokemonName, ButtonsContainer, DetailsButton } from "../cards/styled"
import { RemoveButton } from "./styled"

const PokedexCard = (props) => {
    const pokemon = useRequestData(props.url, undefined)
    const history =  useHistory()

    const goToDetailsPokemon = (id) => {
        history.push(`/pokedex/poke-detail/${id}`)
    }
  

      return (
             <CardContainer>
                 {pokemon && 
                 <div>
                  <ImagePokemon src={pokemon.sprites.front_default} alt={pokemon.name} />
                  <PokemonName>{pokemon.name}</PokemonName> 
                 
                 <ButtonsContainer>
                 <DetailsButton onClick={() => {goToDetailsPokemon(pokemon.id)}}>DETALHES</DetailsButton>
                 <RemoveButton onClick={() => {props.removeItem(pokemon.id)}}>REMOVER</RemoveButton>   
                </ButtonsContainer>
             </div>
                }
            </CardContainer>
        )
}

export default PokedexCard