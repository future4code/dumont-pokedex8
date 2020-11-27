import React from "react";
import { Container, ButtonLeft, ButtonRight, PokedexContainer, TitleContainer, Transparent } from "../header/styled";
import { Switch, Route, useHistory } from 'react-router-dom'

const Header = () => {
   const history = useHistory()

  const goToPokemonList= () => {
      history.push("/");
  }

  const goToPokedex= () => {
      history.push("/pokedex");
  }

  const goBack= () => {
      history.goBack();
  }

  return (
    <Container>

      <Switch>
        <Route exact path="/pokedex">
          <PokedexContainer>
            <ButtonLeft onClick={goToPokemonList}>Ver todos os Pokemons</ButtonLeft>
            <TitleContainer>Pokedex</TitleContainer>
            <Transparent>essebotaoétransparente</Transparent>          
          </PokedexContainer>
        </Route>
        
        <Route exact path="/">
          <PokedexContainer>
            <ButtonLeft onClick={goToPokedex}>Ir para Pokedex</ButtonLeft>
            <TitleContainer>Lista de Pokemons</TitleContainer>
            <Transparent>essebotaoétransparente</Transparent>      
          </PokedexContainer>
        </Route>

        <Route exact path="/pokedex/poke-detail/:id">
          <PokedexContainer>
            <ButtonLeft onClick={goBack}>Voltar</ButtonLeft>
            <TitleContainer>Nome do Pokemon</TitleContainer>
            <ButtonRight onClick={goToPokemonList}>Ir para Pokedex</ButtonRight>            
          </PokedexContainer>
        </Route>
      </Switch>

    </Container>
  )
}

export default Header;
