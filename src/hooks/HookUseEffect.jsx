import { useEffect, useState } from "react";
import { Moda } from "../components/moda";
export const HookUseEffect = () => {
  const [personajes, setPersonajes] = useState();
  const [modal, setModal] = useState({});

  const abrirModal = (name) => {
    console.log(name);
    setModal((prevent) => ({
      ...prevent,
      [name]: true,
    }));
  };

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

              <td>
                <button onClick={() => abrirModal(personaje.name)}>
                  Informacion
                </button>
                {modal[personaje.name] && (
                  <Moda
                    modal={modal[personaje.name]}
                    setModal={setModal}
                    personaje={personaje}
                  />
                )}
              </td>
            </div>
          ))}
      </div>
    </section>
  );
};
