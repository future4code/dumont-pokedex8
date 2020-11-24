import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../Screens/HomePage'
import PokedexPage from '../Screens/PokedexPage'
import DetailsPage from '../Screens/DetailsPage'
import Header from '../Components/header/Header'
import ErrorPage from '../Screens/ErrorPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Header />
                    <HomePage />
                </Route>

                <Route exact path="/pokedex/poke-detail/:id">
                    <Header />
                    <DetailsPage />
                </Route>

                <Route exact path="/pokedex">
                    <Header />
                    <PokedexPage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>            
        </BrowserRouter>
    )
}

export default Router;