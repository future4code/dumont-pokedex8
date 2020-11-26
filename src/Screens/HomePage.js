import React, { useContext, useEffect } from 'react'
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
    const {states, setters, requests} = useContext(GlobalStateContext)

    useEffect(() => {
        requests.getPokemons()
      }, [])
    
  
    const addItemToPokedex = (newItem) => {
        const index = states.pokemon.findIndex((i) => i.name === newItem.name)
        let newPokedex = [...states.pokedex]
        newPokedex.push({ ...newItem})
        let newPokelist = [...states.pokemon]
        newPokelist.splice(index, 1)
        
        setters.setPokedex(newPokedex)
        setters.setPokemon(newPokelist)
        alert(`Adicionado na Pokedex!`)
      }
      console.log(states.pokedex)


    return (
        <HomeContainer>
            {states.pokemon && states.pokemon.map((item) => {
                return <Card url={item.url} addItemToPokedex={() => {addItemToPokedex(item)}}      />
            })}
        </HomeContainer>
    )

}

export default HomePage

