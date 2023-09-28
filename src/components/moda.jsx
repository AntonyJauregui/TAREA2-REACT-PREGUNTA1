export const Moda = ({ modal, setModal, personaje }) => {
  console.log(modal);
  return (
    <>
      {modal && (
        <div className="modal">
          <img src={personaje.image} alt="" />
          <h1>{personaje.name}</h1>
          <h3>{personaje.location.name}</h3>
          <h3>{personaje.origin.name}</h3>
          <h3>{personaje.status}</h3>

          <button onClick={() => setModal(false)}>Cerrar Modal</button>
        </div>
      )}
    </>
  );
};
