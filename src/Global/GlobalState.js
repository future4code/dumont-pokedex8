import React, { useState } from "react"
import axios from "axios"
import {baseUrl} from "../constants/baseUrl"
import GlobalStateContext from "./GlobalStateContext"
import { useParams } from "react-router-dom"


const GlobalState = (props) => {
  const [pokemon, setPokemon] = useState([])
  const [details, setDetails] = useState([])
  //const pathParams = useParams()
  //const id = pathParams.id

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

  const getDetails = (id) => {
    axios
      .get(`${baseUrl}/${id}`)
      .then((response) => {
        setDetails(response.data.abilities)
        console.log(getDetails)
      })
      .catch((err) => {
        console.log(err)
        alert("Erro, tente novamente")
    })
  }

  const states = {pokemon, details}
  const setters = {setPokemon, setDetails}
  const requests = {getPokemons, getDetails}

  const data = { states, setters, requests }

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState
