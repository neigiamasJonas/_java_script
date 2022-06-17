import { useEffect } from "react"
import { useState } from "react"
import Pokemon from "./comp-3-pokemon"

function PokemonData() {

    // const array = []

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then((result) => {
            setData(result.results)
            console.log(result.results);
            
        })
    }, [])

    return(
        <>
        <div>
            {
                data.map((value, index) => (
                    <Pokemon key={index} name={value.name} url={value.url}></Pokemon>
                ))
            }
        </div>
        </>
    )
}

export default PokemonData;