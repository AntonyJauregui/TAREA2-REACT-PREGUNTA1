import { HookUseEffect } from "./hooks/HookUseEffect";

export const Principal = () => {
  const abrirModal = () => {
    setModal(true);
  };
  return (
    <div>
      <center>
        <h1>Rick and Morty API</h1>
        <h2>Resumen de Personajes</h2>
      </center>
      <HookUseEffect abrirModal={abrirModal} />
    </div>
  );
};
  