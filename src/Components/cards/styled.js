import styled from "styled-components"

export const CardContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 250px;
   height: 300px;
   background-color: #d9eefd;
   border: 1.5px #c05746 dashed;
   cursor: pointer;
   margin: 15px;
   
   &:hover {
   border: 2px #c05746 solid;
   }
`

export const AddButton = styled.button`
   display: flex;
   align-items: center;
   outline: none;
   cursor: pointer;
   background:#c05746;
   border: 1px solid #c05746;
   border-radius: 5px;
   color: white;
   padding: 5px 10px;
   margin: 0 0 10px 0;

   &:hover {
      background-color: #ffc600;
      color: white;
}
`     
export const DetailsButton = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   outline: none;
   cursor: pointer;
   background:#c05746;
   border: 1px solid #c05746;
   border-radius: 5px;
   color: white;
   padding: 5px 10px;
   margin: 0 10px 10px 0;

   &:hover {
      background-color: #ffc600;
      color: white;
}
`  

export const ButtonsContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   flex-direction: row;
   margin-top: 10px;
`    

export const PokemonName = styled.p`
   display: flex;
   justify-content: center;
   align-items: center;
   color: black;
   text-transform: uppercase;
`    

export const ImagePokemon = styled.img`
   width: 200px;
   height:200px;
`    