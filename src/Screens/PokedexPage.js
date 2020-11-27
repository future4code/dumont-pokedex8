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

    h3 {
        display:flex;
        align-items: center;
        justify-content: center;
        margin-top: 40vh;
        text-transform: uppercase;
        color: #124B88;
    }
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
            <h3>Sua Pokedex está vazia,<br /> escolha um pokemon!</h3>}
        </PokedexContainer>
    )

}

export default PokedexPage;