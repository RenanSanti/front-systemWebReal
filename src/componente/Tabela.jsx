//Componente
function Tabela({registros, funcaoSelecionar}) {
    //Render
    return (

        <table  className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Selecionar</th>
                </tr>

            </thead>
            <tbody>
                {
                    registros.map((obj, indice) => (
                            <tr key={indice}>
                            <td>{obj.id}</td>
                            <td>{obj.nome}</td>
                            <td>{obj.email}</td>
                            <td>
                                <button onClick={() => funcaoSelecionar(indice)} className="btn btn-primary">Selecionar</button>
                            </td>
                        </tr>
                    ))           
                                                
                }


            </tbody>
        </table>

    );

}


//Exportação
export default Tabela;