// import css
import "./Produto.css";

// Componente
function Produto({ botao, produtoSelecionado, atualizarProdutoSelecionado, cadastrarProduto }) {
    return (
        <form>
            <h1>{/* JSON.stringify(produtoSelecionado) */}</h1>

            <input 
                type="number" 
                placeholder="Código do Produto"  
                className="form-control" 
                name="id" 
                readOnly 
                value={produtoSelecionado.id || ""} 
            />

            <input 
                type="text" 
                placeholder="Digite o nome do produto" 
                className="form-control" 
                name="nome" 
                value={produtoSelecionado.nome || ""} 
                onChange={atualizarProdutoSelecionado} 
            />

            <input 
                type="text" 
                placeholder="Digite o tipo do material" 
                className="form-control" 
                name="material" 
                value={produtoSelecionado.material || ""} 
                onChange={atualizarProdutoSelecionado} 
            />

            <input 
                type="number" 
                placeholder="Quantidade" 
                className="form-control" 
                name="quantidade" 
                value={produtoSelecionado.quantidade || ""} 
                onChange={atualizarProdutoSelecionado} 
            />

            <input 
                type="number" 
                placeholder="Preço de Compra" 
                className="form-control" 
                name="precoCompra" 
                value={produtoSelecionado.precoCompra || ""} 
                onChange={atualizarProdutoSelecionado} 
                step="0.01" 
            />

            <input 
                type="number" 
                placeholder="Preço de Venda" 
                className="form-control" 
                name="precoVenda" 
                value={produtoSelecionado.precoVenda || ""} 
                onChange={atualizarProdutoSelecionado} 
                step="0.01" 
            />

            <input type="button" className="btn btn-primary" value="Consultar" />

            {
                botao
                ? <input type="button" className="btn btn-primary" value="Cadastrar" onClick={cadastrarProduto} />
                : <>
                    <input type="button" className="btn btn-primary" value="Alterar" onClick={alterar} />
                    <input type="button" className="btn btn-primary" value="Remover" onClick={deletar} />
                    <input type="button" className="btn btn-primary" value="Cancelar" onClick={cancelar} />
                  </>
            }
        </form>
    );
}

// Exportação
export default Produto;
