import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 60px;
  color: white;
  background-color: #124b88;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;

export const Container2BotaoVoltar = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-left: 20px;
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

export const Container3BotaoPoke = styled.button`
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
`;
