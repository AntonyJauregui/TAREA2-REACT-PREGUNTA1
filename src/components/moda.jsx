export const Moda = ({modal, setModal, per}) => {
    console.log(modal)
    return (

        <>
            {
                modal && (
                    <div className='modal'>
                         <img src={per.name} alt="" />
                        <h1>{per.name}</h1>
                        <button onClick={() => setModal(false)}>Cerrar Modal</button>
                    </div>
                )
            }
        </>
    )
}
