import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 250px;

    h1 {
        text-transform: uppercase;
        color: #124B88;
    }

    h2 {
        color: black;
    }

`
 const GoBackButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-left: 20px;
  outline: none;
  cursor: pointer;
  background: #c05746;
  border: 1px solid #c05746;
  border-radius: 5px;
  padding: 10px 20px;
  color: white;
  &:hover {
    background-color: #ffc600;
    color: white;
  }
`

const ErrorPage = () => {
    
    const history = useHistory()

    const goToHomePage = () => {
        history.push("/");
    }

    return (
        <ErrorContainer>
            <h1>Error 404</h1>
            <h2>Page not found.</h2>
            <GoBackButton onClick={goToHomePage}>Home Page</GoBackButton>

        </ErrorContainer>
    )

}

export default ErrorPage;