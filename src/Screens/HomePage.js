import React from 'react'
import { baseUrl } from '../constants/baseUrl'
import { useRequestData } from '../hooks/useRequestData'
import Card from "../Components/cards/Cards"
import styled from "styled-components"

const HomeContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`     

const HomePage = () => {


    const getPokemons = useRequestData(`${baseUrl}/?limit=20`, undefined)
    return (
        <HomeContainer>
            {getPokemons && getPokemons.results.map((item) => {
                return <Card url={item.url} name={item.name}/>
            })}
            <p>Home PAGE</p>
        </HomeContainer>
    )

}

export default HomePage;