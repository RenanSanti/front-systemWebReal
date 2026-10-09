// import css
import "./Produto.css";

// Componente
function Produto({ botao, produtoSelecionado, atualizarProdutoSelecionado, cadastrarProduto, cancelar, alterar, deletar, grausEsfericos }) {
    return (
    <div className="produtos-wrapper">
      <div className="produtos-card">
        <h2>📦 Cadastro de Produtos</h2>

        <form  className="form-section">
          <div className="form-row">
            <label htmlFor="tipoLente">Tipo do Produto</label>
            <select
              id="tipoLente"
                name="tipoLente"
                className="form-control"
                value={produtoSelecionado.tipoLente || ""}
                onChange={atualizarProdutoSelecionado}
             
            >
              <option value="VISAO SIMPLES">Visão Simples</option>
              <option value="PROGRESSIVA">Multifocal</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="tipoMaterial">Tipo do Material</label>
            <select
               id="tipoMaterial"
                name="tipoMaterial"
                className="form-control"
                value={produtoSelecionado.tipoMaterial || ""}
                onChange={atualizarProdutoSelecionado}
              
            >
              <option value="RESINA">Resina</option>
              <option value="POLICARBONATO">Policarbonato</option>
            </select>
          </div>
            <h1>{/* JSON.stringify(produtoSelecionado) */}</h1>

        <div className="form-row">
            <input 
                type="number" 
                placeholder="Código do Produto"  
                className="form-control" 
                name="id" 
                readOnly 
                value={produtoSelecionado.id || ""} 
            />
        </div>
        <div className="form-row">
            <label htmlFor="linha">Linha</label>
            <select
              id="linha"
                name="linha"
                className="form-control"
                value={produtoSelecionado.linha || ""}
                onChange={atualizarProdutoSelecionado}
             
            >
              <option value="VS INCOLOR CHAVE 01 VG">VS INCOLOR CHAVE 01 VG</option>
              <option value="VS INCOLOR CHAVE 02 VG">VS INCOLOR CHAVE 02</option>
              <option value="VS AR CHAVE 01 VG">VS AR CHAVE 01 VG</option>
              <option value="VS AR CHAVE 02 VG">VS AR CHAVE 02 VG</option>
              <option value="VS AR CHAVE 01 HTK">VS AR CHAVE 01 HTK</option>
              <option value="VS AR CHAVE 02 HTK">VS AR CHAVE 02 HTK</option>
              <option value="VS BLUE CHAVE 01 VG">VS BLUE CHAVE 01 VG</option>
              <option value="VS BLUE CHAVE 02 VG">VS BLUE CHAVE 02</option>
              <option value="VS BLUE CHAVE 01 HTK">VS BLUE CHAVE 01 HTK</option>
              <option value="VS BLUE CHAVE 02 HTK">VS BLUE CHAVE 02 HTK</option>
            </select>
          </div>
        <div className="input-nome form-row">
            <input 
                type="text" 
                placeholder="Digite o nome do produto" 
                className="form-control" 
                name="nome" 
                value={produtoSelecionado.nome || ""} 
                onChange={atualizarProdutoSelecionado} 
            />
        </div>

        <div className="form-row">
            <label htmlFor="grauEsferico">Grau Esférico</label>
            <select
              id="grauEsferico"
                name="grauEsferico"
                className="form-control"
                value={produtoSelecionado.grauEsferico || ""}
                onChange={atualizarProdutoSelecionado}
             
            >
              <option value="">Selecione...</option>
              {grausEsfericos.map((obj) => (
                    <option key={obj.id} value={obj.nome}>
                    {obj.nome}
                    </option>
                ))}

            </select>
          </div>

          <div className="form-row">
            <label htmlFor="grauCilindrico">Grau Cilíndrico</label>
            <select
              id="grauCilindrico"
                name="grauCilindrico"
                className="form-control"
                value={produtoSelecionado.grauCilindrico || ""}
                onChange={atualizarProdutoSelecionado}
             
            >
              <option value="-000">-000</option>
              <option value="-025">-025</option>
              <option value="-050">-050</option>
              <option value="-075">-075</option>
              <option value="-100">-100</option>
              <option value="-125">-125</option>
              <option value="-150">-150</option>
              <option value="-175">-175</option>
              <option value="-200">-200</option>
              <option value="-225">-225</option>
              <option value="-250">-250</option>
              <option value="-275">-275</option>
              <option value="-300">-300</option>
              <option value="-325">-325</option>
              <option value="-350">-350</option>
              <option value="-375">-375</option>
              <option value="-400">-400</option>
            </select>
          </div>

        
        <div className="form-row">
            <label htmlFor="quantidade">Quantidade</label>
            <input 
                type="number" 
                placeholder="Quantidade" 
                className="form-control" 
                name="quantidade" 
                value={produtoSelecionado.quantidade || ""} 
                onChange={atualizarProdutoSelecionado} 
            />
        </div>
        <div className="form-row">
            <label htmlFor="precoCompra">Preço de Compra</label>
            <input 
                type="number" 
                placeholder="Preço de Compra" 
                className="form-control" 
                name="precoCompra" 
                value={produtoSelecionado.precoCompra || ""} 
                onChange={atualizarProdutoSelecionado} 
                step="0.01" 
            />
        </div>
        <div className="form-row">
            <label htmlFor="precoVenda">Preço de Venda</label>
            <input 
                type="number" 
                placeholder="Preço de Venda" 
                className="form-control" 
                name="precoVenda" 
                value={produtoSelecionado.precoVenda || ""} 
                onChange={atualizarProdutoSelecionado} 
                step="0.01" 
            />
        </div>
        <div className="form-row">

            <input type="button" className="btn btn-primary" value="Consultar" />

            {
                botao
                ? <input type="button" className="btn btn-primary" value="💾 Salvar Produto" onClick={cadastrarProduto} />
                : <>
                    <input type="button" className="btn btn-primary" value="Alterar" onClick={alterar} />
                    <input type="button" className="btn btn-primary" value="Remover" onClick={deletar} />
                    <input type="button" className="btn btn-primary" value="Cancelar" onClick={cancelar} />
                  </>
            }
        </div>
        </form>
    </div>
    </div>
    );
}

// Exportação
export default Produto;
