import React, { useState } from "react"
import axios from "axios"
import {baseUrl} from "../constants/baseUrl"
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = (props) => {
  const [pokemon, setPokemon] = useState([])
  

  const getPokemons = () => {
    axios
      .get(`${baseUrl}/?limit=20`)
      .then((response) => {
        setPokemon(response.data.results)
      })
      .catch((err) => {
        console.log(err)
        alert("Erro, tente novamente")
    })
  }

  const states = {pokemon}
  const setters = {setPokemon}
  const requests = {getPokemons}

  const data = { states, setters, requests }

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState
