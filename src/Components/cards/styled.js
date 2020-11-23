import styled from "styled-components"

export const CardContainer = styled.div`
 width: 200px;
 height: 300px;
 background-color: #d9eefd;
 border: 1.5px #c05746 dashed;
 display: flex;
 flex-direction: column;
 align-items: center;
 cursor: pointer;
 margin: 12px;
 &:hover {
  border: 2px #c05746 solid;
  }
`

export const AddButton = styled.button`
margin-right:5px;

outline: none;
cursor: pointer;
background:#c05746;
border: 1px solid #c05746;
border-radius: 5px;
color: white;
&:hover {
   background-color: #ffc600;
   color: white;
}
`     
export const DetailsButton = styled.button`
margin-left:5px;
outline: none;
cursor: pointer;
background:#c05746;
border: 1px solid #c05746;
border-radius: 5px;
color: white;
&:hover {
   background-color: #ffc600;
   color: white;
}
`  

export const ButtonsContainer = styled.div`
display: flex;
flex-direction: row;
margin-top: 10px;
`    