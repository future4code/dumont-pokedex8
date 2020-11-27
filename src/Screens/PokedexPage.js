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

    
    const removeItemFromPokedex = (itemToRemove, index) => {
      //const index = states.pokedex.findIndex((item) => item.name === itemToRemove.name)
      //da pra fazer sem o findIndex, só colocar o index no parametro da função e no map lá embaixo
        let newPokedex = [...states.pokedex]
        newPokedex.splice(index, 1)
        setters.setPokedex(newPokedex)
        let pokemonList = [...states.pokemon]
        pokemonList.push(itemToRemove)
        console.log(pokemonList[0].url.split("/"))
        pokemonList.sort((a, b) => a.url.split("/")[6] - b.url.split("/")[6])
      //pro pokemon voltar pra home na mesma posição, sort: ordena, a - b pra ordenar do menor pro maior, ai a url ta puxando a url de detalhes, o split divide em posições e usa como base o / e no console o id fica na posição 6, por isso o [6] 
        setters.setPokemon(pokemonList)
    }

    const pokemonList = states.pokedex.map((item, index) => {
        return (
            <div>
            <PokedexCard
            key={item.name}
            url={item.url}
            removeItem={() => {removeItemFromPokedex(item, index)}}
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