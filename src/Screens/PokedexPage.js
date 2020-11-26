import React, {useContext} from 'react'
import PokedexCard from '../Components/PokedexCard/PokedexCard'
import GlobalStateContext from '../Global/GlobalStateContext'



const PokedexPage = () => {
    const { states, setters } = useContext(GlobalStateContext)
    const pokemonList = states.pokedex.map((item) => {
        return (
            <div>
            
            <PokedexCard
            url={item.url}
             />
            </div>
        )
    })

    return (
        <div>
            <p>POKEDEX PAGE</p>
            {pokemonList.length > 0 ? pokemonList : 
            <p>Pokedex vazia, escolha alguem pokemon!</p>}
        </div>
    )

}

export default PokedexPage;