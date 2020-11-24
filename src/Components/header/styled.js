import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 10vh;
  color: white;
  background-color: #124b88;
`

export const PokedexContainer = styled.div`
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80vw;
  height: 10vh;
`

export const TitleContainer = styled.h1`
  display: flex;
  justify-content: center;
  color: white;
  text-transform: uppercase;
` 

export const ButtonLeft = styled.button`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: space-evenly;
  outline: none;
  cursor: pointer;
  background: #c05746;
  border: 1px solid #c05746;
  border-radius: 5px;
  color: white;
  padding: 10px 20px;

  &:hover {
    background-color: #ffc600;
    color: white;
  }
`;

export const ButtonRight = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-right: 20px;
  outline: none;
  cursor: pointer;
  background: #c05746;
  border: 1px solid #c05746;
  border-radius: 5px;
  color: white;
  padding: 10px 20px;
  &:hover {
    background-color: #ffc600;
    color: white;
  }
`
export const Transparent = styled.button`
  color: #124b88;
  border: none;
  background-color: #124b88;
  outline: none;
`