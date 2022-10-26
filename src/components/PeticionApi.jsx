import React from 'react'

const PeticionApi = () => {
    const [personajes, setPersonajes] = React.useState([])
    const [paginacion, setPaginacion] = React.useState(1)

    const obtenerPersonajes = async()=>{
        try{
            const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${paginacion}`)
            const {results} = await res.json()
            setPersonajes(results)
        }catch(error){
            console.log(error)
        }
    }

    const siguiente = async () =>{
        await setPaginacion(paginacion + 1)
        obtenerPersonajes()
    }

    const atras = async () =>{
        await setPaginacion(paginacion - 1)
        obtenerPersonajes()
    }


  return (
    <div>
        <h1>PETICIÓN AL API DE RICK AND MORTY</h1>
        <button onClick={obtenerPersonajes}>Traer Personajes</button>
        <button onClick={siguiente}> Siguiente</button>
        <button onClick={atras}>Atrás</button>
        {
            personajes.map((resultado) =>(
                <div key = {resultado.id}>
                    <h4>{resultado.id}-{resultado.name}</h4>
                    <img src={resultado.image} alt={resultado.name} />
                    
                </div>    
            ))
        }

    </div>
  )
}

export default PeticionApi