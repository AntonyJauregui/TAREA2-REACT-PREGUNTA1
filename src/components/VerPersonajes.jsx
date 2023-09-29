export const VerPersonajes = ({personaje}) =>{
    

    return(
        <table width="100%">
        <thead>
            <th><b>Image</b></th>
            <th><b>Nombre</b></th>
            <th><b>Species</b></th>
            <th><b>Informacion</b></th>
            
        </thead>
        <tbody >
                {
                    personaje && (
                        personaje.map((per) => (
                            <tr className="cardPersonaje">
                                <td>
                                    <img src={per.image} alt="" />
                                </td>   
                                <td>
                                    <p><b>{per.name}</b></p>
                                </td>
                                <td>
                                    <p><b>{per.species}</b></p>
                                </td>
                                <td>
                                <button><b>Saber Mas</b></button>
                                    
                                </td>

                            </tr>
                        ))
                    )
                    
                }
        </tbody>
    </table>
    )
}
