//import css
import "./Formulario.css";


//Componente
function Formulario({botao, pessoaSelecionada, atualizarPessoaSelecionada, cadastrarPessoa, cancelar, alterar, deletar}) {
    //Render
    return (
            
        <form><h1>{JSON.stringify(pessoaSelecionada)}</h1>
            <input type="number" placeholder="Seu Código"  className="form-control" name="id" readOnly value={pessoaSelecionada.id || ""} />
            <input type="text" placeholder="Digite seu nome" className="form-control" name="nome" value={pessoaSelecionada.nome || ""} onChange={atualizarPessoaSelecionada} />
            <input type="text" placeholder="Digite seu email" className="form-control" name="email" value={pessoaSelecionada.email || ""} onChange={atualizarPessoaSelecionada} />
            <input type="text" placeholder="Digite seu usuario" className="form-control" name="usuario" value={pessoaSelecionada.usuario || ""} onChange={atualizarPessoaSelecionada} />
            <input type="text" placeholder="Digite seu senha" className="form-control" name="senha" value={pessoaSelecionada.senha || ""} onChange={atualizarPessoaSelecionada} />
            
            {
                botao
                ?
                <input type="button" className="btn btn-primary" value="Cadastrar" onClick={cadastrarPessoa} />
                :
                <>
                    <input type="button" className="btn btn-primary" value="Alterar" onClick={alterar} />
                    <input type="button" className="btn btn-primary" value="Remover" onClick={deletar}/>
                    <input type="button" className="btn btn-primary" value="Cancelar" onClick={cancelar} />
                </>
            }
        </form>

    );
}


//Exportação
export default Formulario;