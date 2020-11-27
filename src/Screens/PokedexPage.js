import React, {useContext} from 'react'
import PokedexCard from '../Components/PokedexCard/PokedexCard'
import GlobalStateContext from '../Global/GlobalStateContext'
import styled from "styled-components"

const PokedexContainer = styled.div`
display: flex;
width: 100vw;
height: auto;
flex-wrap: wrap;
justify-content: center;
`  

const PokedexPage = () => {
    const { states, setters } = useContext(GlobalStateContext)

    
    const removeItemFromPokedex = (itemToRemove) => {
        const index = states.pokedex.findIndex((item) => item.name === itemToRemove.name)
        let newPokedex = [...states.pokedex]
        newPokedex.splice(index, 1)
        setters.setPokedex(newPokedex)
    }

    const pokemonList = states.pokedex.map((item) => {
        return (
            <div>
            <PokedexCard
            key={item.name}
            url={item.url}
            removeItem={() => {removeItemFromPokedex(item)}}
             />
            </div>
        )
    })

    return (
        <PokedexContainer>
            {pokemonList.length > 0 ? pokemonList : 
            <p>Pokedex vazia, escolha alguem pokemon!</p>}
        </PokedexContainer>
    )

}

export default PokedexPage;