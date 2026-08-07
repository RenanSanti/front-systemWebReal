//import css
import "./Tabela.css";

function Tabela({ registros, funcaoSelecionar }) {
  return (
    <div className="table-area">
      <h3>📊 Registros</h3>
      <div className="table-scroll">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Selecionar</th>
            </tr>
          </thead>
          <tbody>
            {registros.map((obj, indice) => (
              <tr key={indice}>
                <td>{obj.id}</td>
                <td>{obj.nome}</td>
                <td>{obj.email}</td>
                <td>
                  <button
                    onClick={() => funcaoSelecionar(indice)}
                    className="btn btn-primary"
                  >
                    Selecionar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tabela;
