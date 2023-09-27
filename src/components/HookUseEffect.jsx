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

  const [episode, setEpisode] = useState();

  useEffect(() => {
    const getApi = async () => {
      let response = await fetch("https://rickandmortyapi.com/api/episode");
      let episode = await response.json();
      setEpisode(episode.results);
      return episode;
    };
    getApi();
  }, []);

  console.log(personajes);
  return (
    <section className="container">
      <div className="containerPersonaje">
        {personajes &&
          personajes.map((personaje, episode) => (
            <div className="cardPersonaje" key={personaje.name}>
              <img src={personaje.image} alt="" />
              <h3>Nombre:</h3>
              <p>{personaje.name}</p>
              <h3>Especie:</h3>
              <p>{personaje.species}</p>
              <h3>Localización:</h3>
              <p>{personaje.location.name}</p>
              <h3>Origen:</h3>
              <p>{personaje.origin.name}</p>
              <h3>Status:</h3>
              <p>{personaje.status}</p>
              <h3>First seen in:</h3>
              <p>{episode.name}</p>
            </div>
          ))}
      </div>
    </section>
  );
};
