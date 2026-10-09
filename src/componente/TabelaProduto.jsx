// import css
import "./Tabela.css";

// Componente
function TabelaProduto({ registros, funcaoSelecionar }) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>G. Esferico</th>
                    <th>G. Cilindrico</th>
                    <th>Linha</th>
                    <th>Material</th>
                    <th>Quantidade</th>
                    <th>Preço Compra</th>
                    <th>Preço Venda</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    registros.map((produto, indice) => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.grauEsferico}</td>
                            <td>{produto.grauCilindrico}</td>
                            <td>{produto.linha}</td>
                            <td>{produto.tipoMaterial}</td>
                            <td>{produto.quantidade}</td>
                            <td>{produto.precoCompra}</td>
                            <td>{produto.precoVenda}</td>
                            <td>
                                <button 
                                    className="btn btn-info btn-sm" 
                                    onClick={() => funcaoSelecionar(indice)}
                                >
                                    Selecionar
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

// Exportação
export default TabelaProduto;