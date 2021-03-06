import React, { useContext } from 'react'
import Card from "./../Components/cards/Cards"
import styled from "styled-components"
import GlobalStateContext from '../Global/GlobalStateContext'

const HomeContainer = styled.div`
display: flex;
width: 100vw;
height: auto;
flex-wrap: wrap;
justify-content: center;
`     

const HomePage = () => {
    const {states, setters} = useContext(GlobalStateContext)

    

    const addItemToPokedex = (newItem, index) => {
       // const index = states.pokemon.findIndex((i) => i.name === newItem.name)
        let newPokedex = [...states.pokedex]
        newPokedex.push({ ...newItem})
        let newPokelist = [...states.pokemon]
        newPokelist.splice(index, 1)
        
        setters.setPokedex(newPokedex)
        setters.setPokemon(newPokelist)
        alert(`Adicionado na Pokedex!`)
    }
      

    return (
        <HomeContainer>
            {states.pokemon && states.pokemon.map((item, index) => {
                return <Card url={item.url} addItemToPokedex={() => {addItemToPokedex(item, index)}}      />
            })}
        </HomeContainer>
    )

}

export default HomePage

