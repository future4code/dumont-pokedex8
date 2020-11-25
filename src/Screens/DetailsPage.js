import React from 'react'
import styled from 'styled-components'

const DetailsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    height: 90vh;
    background-color: white;

    h3 {
        color: #124B88;
        text-transform: uppercase;
        margin: 0;
    }

    p {
        color: black;
    }
`
const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #A2D6F9;
    border: 2px #c05746 dashed;
    border-radius: 10px;
    padding: 10px;
`

const TypeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 20vw;
    border: 2px #c05746 dashed;
    background-color: #A2D6F9;
    margin-right: 10px;
    border-radius: 10px;
`

const StatsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    width: 300px;
    border: 2px #c05746 dashed;
    background-color: #A2D6F9;
    margin-right: 10px;
    border-radius: 10px;
`

const MovesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 20vw;
    border: 2px #c05746 dashed;
    background-color: #A2D6F9;
    border-radius: 10px;
`

const InfosContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 60vw;  
`

const DetailsPage = () => {
    

    return (
        <DetailsContainer>
            <ImgContainer>
                <img src="https://picsum.photos/200/200" name={"front"} />
                <br />
                <img src="https://picsum.photos/200/200" name={"back"} />
            </ImgContainer>

        <InfosContainer>
            <TypeContainer>
                <h3>Type</h3>
                <p>Type 1</p>
                <p>Type 2</p>
            </TypeContainer>

            <StatsContainer >
                <h3>Stats</h3>
                <p><strong>HP:</strong> 50</p>
                <p><strong>Attack:</strong> 50</p>
                <p><strong>Defense:</strong> 50</p>
                <p><strong>Special-Attack:</strong> 50</p>
                <p><strong>Special-Defense:</strong> 50</p>
                <p><strong>Speed:</strong> 50</p>
            </StatsContainer>

            <MovesContainer>
                <h3>Moves</h3>
                <p>Moves name 1</p>
                <p>Moves name 2</p>
                <p>Moves name 3</p>
            </MovesContainer>
        </InfosContainer>
           
        </DetailsContainer>
    )

}

export default DetailsPage;