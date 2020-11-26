import React, { useContext, useEffect } from 'react'
import Card from "../Components/cards/Cards"
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

  
    
    return (
        <HomeContainer>
            {states.pokemon && states.pokemon.map((item) => {
                return <Card url={item.url}/>
            })}
        </HomeContainer>
    )

}

export default HomePage

