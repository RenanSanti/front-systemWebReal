import Formulario from "./componente/Formulario";
import Tabela from "./componente/Tabela";
import SegundaTela from "./componente/SegundaTela";
import Layout from "./componente/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [pessoas, setPessoas] = useState([]);
  const [botaoCadastrar, setBotaoCadastrar] = useState(true);
  const [pessoaSelecionada, setPessoaSelecionada] = useState({
    id: null,
    nome: "",
    email: "",
    usuario: "",
    senha: ""
  });

  useEffect(() => {
    fetch("https://systemawebreal.onrender.com/api/usuarios/listarUsuarios")
      .then(resposta => resposta.json())
      .then(dados => {
        setPessoas(dados);
        console.table(dados);
      })
      .catch(error => console.error("Erro ao buscar usuários:", error));
  }, []);

  const atualizarPessoaSelecionada = (e) => {
    const { name, value } = e.target;
    setPessoaSelecionada({
      ...pessoaSelecionada,
      [name]: value
    });
  };

  const cadastrarPessoa = () => {
    fetch("https://systemawebreal.onrender.com/api/usuarios/cadastrarUsuario", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pessoaSelecionada)
    })
      .then(resposta => resposta.json())
      .then(dados => {
        setPessoas(prev => [...prev, dados]);
        setPessoaSelecionada({ id: null, nome: "", email: "", usuario: "", senha: "" });
      })
      .catch(error => console.error("Erro ao cadastrar pessoa:", error));
  };

  const selecionarPessoaEspecifica = (indice) => {
    setPessoaSelecionada(pessoas[indice]);
    setBotaoCadastrar(false);
  };

  const cancelarPessoa = () => {
    setPessoaSelecionada({ id: null, nome: "", email: "", usuario: "", senha: "" });
    setBotaoCadastrar(true);
  };

  const alterar = () => {
    fetch("https://systemawebreal.onrender.com/api/usuarios/alterarUsuario/" + pessoaSelecionada.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pessoaSelecionada)
    })
      .then(resposta => resposta.json())
      .then(dados => {
        setPessoas(prev => prev.map(p => p.id === dados.id ? dados : p));
        cancelarPessoa();
      })
      .catch(error => console.error("Erro ao alterar pessoa:", error));
  };

  const deletar = () => {
    fetch("https://systemawebreal.onrender.com/api/usuarios/deletarUsuario/" + pessoaSelecionada.id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })
      .then(resposta => {
        if (resposta.ok) {
          setPessoas(prev => prev.filter(p => p.id !== pessoaSelecionada.id));
          cancelarPessoa();
        }
      })
      .catch(error => console.error("Erro ao deletar pessoa:", error));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Tela principal */}
          <Route
            index
            element={
              <>
                <Formulario
                  botao={botaoCadastrar}
                  pessoaSelecionada={pessoaSelecionada}
                  atualizarPessoaSelecionada={atualizarPessoaSelecionada}
                  cadastrarPessoa={cadastrarPessoa}
                  cancelar={cancelarPessoa}
                  alterar={alterar}
                  deletar={deletar}
                />
                <Tabela
                  registros={pessoas}
                  funcaoSelecionar={selecionarPessoaEspecifica}
                />
              </>
            }
          />
          {/* Segunda tela */}
          <Route path="segunda" element={<SegundaTela />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
