import React from "react"
import {CardContainer, AddButton, DetailsButton,ButtonsContainer } from "./styled"

const PokeCard = () => {
    return(
        <CardContainer>
            <img src={`https://picsum.photos/200/200/?a=1`} alt={"foto aleatoria"} />
            <p>nome do bichinho</p>
            <ButtonsContainer>
                <AddButton>+ POKEDEX</AddButton>
                <DetailsButton onClick={goToDetails}>DETALHES</DetailsButton>
            </ButtonsContainer>
        </CardContainer>
    )
}

export default PokeCard