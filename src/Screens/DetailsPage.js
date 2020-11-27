import React from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import {baseUrl} from "./../constants/baseUrl"
import {useRequestData} from '../hooks/useRequestData'


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
    align-items: center;
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
    align-items: center;
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
    align-items: center;
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

const NamePokemon = styled.div`
    color: black;
    

`     
const DetailsPage = () => {
    const pathParams = useParams()
    const getDetails = useRequestData(`${baseUrl}/${pathParams.id}`, undefined)


    return (
        <div>
            <NamePokemon>
                {getDetails && <h1>{getDetails.name.toUpperCase()}</h1>}
            </NamePokemon>
        <DetailsContainer>
                {getDetails && 
                <ImgContainer>
                    <img src={getDetails.sprites.front_default} alt={"front"} />
                    <br />
                    <img src={getDetails.sprites.back_default} alt={"back"} />
                </ImgContainer> }
    
            <InfosContainer>
                <TypeContainer>
                    <h3>Type</h3>
                    {getDetails && getDetails.types.map((type) => {
                         return (
                             <div>
                             <p>{type.type.name.toUpperCase()}</p>
                             </div>
                            )
                    })}
                </TypeContainer>
    
                <StatsContainer >
                    <h3>Stats</h3>
                    {getDetails && getDetails.stats.map((stat) => {
                        return (
                        <div>
                            <p><strong>{stat.stat.name.toUpperCase()}:</strong> {stat.base_stat}</p>
                        </div>)
                    })}
                </StatsContainer>
    
                <MovesContainer>
                    <h3>Moves</h3>
                        {getDetails && getDetails.moves.map((move, num) => {
                            return ( num < 5 && <p>{move.move.name.toUpperCase()}</p> )
                        }
                    )}               
                </MovesContainer>
            </InfosContainer>
        </DetailsContainer>
        </div>
    )
                
}

export default DetailsPage;