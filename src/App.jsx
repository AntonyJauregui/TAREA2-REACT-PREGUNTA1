import { useEffect, useState } from 'react'
import {getPersonajes} from './helpers/getPersonajes'
import './App.css'
import { Navbar } from './components/Navbar'
import { VerPersonajes } from './components/VerPersonajes'




function App() {
  const [personaje, setPersonajes] = useState()
  const [filterSpecies, setfilterSpecies] = useState("")
  const [modal, setModal] = useState({})
    useEffect(()=>{
      getPersonajes().then(res => setPersonajes(res.results))
    },[])

     const personajeFilter = () =>{
      if (filterSpecies !== null && filterSpecies.length > 0) {
        return personaje.filter(per => per.species.toLowerCase().includes(filterSpecies.toLowerCase()))
      } else {
        return personaje
      }
    }

    const eliminarPersonaje = () =>{
      const personajeEliminado = personaje.filter(per => per.name !== name)
      setPersonajes(personajeEliminado)
    }

    const abrirModal = () => {
      setModal(true)
    }
console.log(personajeFilter())
  return (
    <section>
      <Navbar />
      <div>

        <h1>Rick and Morty API</h1>
        <h2>Resumen de Personajes</h2>
        <div>
          <input type="text" placeholder='Busqueda por Species' onChange={(e)=>setfilterSpecies(e.target.value)}/>
        </div>

        <VerPersonajes 
        personaje={personajeFilter()} 
        eliminarPersonaje={eliminarPersonaje}
        abrirModal={abrirModal}
        />


      </div>

    </section>
  )
}

export default App
