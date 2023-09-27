import { useEffect, useState } from "react";

export const HookUseEffect = () => {
  const [personajes, setPersonajes] = useState();

  useEffect(() => {
    const getApi = async () => {
      let response = await fetch("https://rickandmortyapi.com/api/character");
      let personajes = await response.json();
      setPersonajes(personajes.results);
      return personajes;
    };
    getApi();
  }, []);

  console.log(personajes);
  return (
    <section className="container">
      <div className="containerPersonaje">
        {personajes &&
          personajes.map((personaje) => (
            <div className="cardPersonaje" key={personaje.name}>
              <img src={personaje.image} alt="" />
              <h3>Nombre:</h3>
              <p>{personaje.name}</p>
              <h3>Especie:</h3>
              <p>{personaje.species}</p>
              <h3>Localización:</h3>
              <p>{personaje.location.name}</p>
              <h3>First seen:</h3>
              <p>{personaje.origin.name}</p>
              <h3>Status:</h3>
              <p>{personaje.status}</p>
            </div>
          ))}
      </div>
    </section>
  );
};
