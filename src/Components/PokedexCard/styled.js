import styled from "styled-components"

export const RemoveButton = styled.button`
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