import React from "react";
import {
  Container,
  Container2BotaoVoltar,
  Container3BotaoPoke,
} from "../header/styled";

const Header = () => {
  return (
    <Container>
      <div>
        <Container3BotaoPoke>Ir para Pokedex</Container3BotaoPoke>
      </div>
      <h1>Lista de Pokemons</h1>
      <div>
        <Container2BotaoVoltar>Voltar</Container2BotaoVoltar>
      </div>
    </Container>
  );
};

export default Header;
