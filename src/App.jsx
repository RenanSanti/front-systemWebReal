import Formulario from "./componente/Formulario";
import Tabela from "./componente/Tabela";
import TabelaProduto from "./componente/TabelaProduto";
import Venda from "./componente/Venda";
import Produto from "./componente/Produto";
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
  // Estado de produtos
  const [produtos, setProdutos] = useState([]);
  const [botaoProduto, setBotaoProduto] = useState(true);
  const [produtoSelecionado, setProdutoSelecionado] = useState({
    id: null,
    nome: "",
    //tipoProduto: "VISAO SIMPLES",
    //material: "RESINA",
    tipoLente:"VISAO SIMPLES",
    tipoMaterial: "RESINA",
    linha: "VS AR CHAVE 01",
    grauEsferico: "-000",
    grauCilindrico: "-000",
    quantidade: "",
    precoCompra: "",
    precoVenda: ""
  });
  const [grausEsfericos, setGrausEsfericos] = useState([]);

 /* useEffect(() => {
  // Buscar produtos
  //listarProdutos();

  // Buscar graus esféricos
  fetch("http://localhost:8080/api/grau/listarGrausEsferico")
    .then(res => res.json())
    .then(dados => {
        setGrausEsfericos(dados);
        console.table(dados);
    })
    .catch(err => console.error("Erro ao buscar graus esféricos:", err));

  // Buscar graus cilíndricos
  //fetch("http://localhost:8080/api/produtos/listarGrausCilindricos")
   // .then(res => res.json())
   // .then(dados => setGrausCilindricos(dados))
   // .catch(err => console.error("Erro ao buscar graus cilíndricos:", err));
}, []);*/

   // Funções de Produto
  const atualizarProdutoSelecionado = (e) => {
    const { name, value } = e.target;
    setProdutoSelecionado({ ...produtoSelecionado, [name]: value });
  };

  

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
  
  const cadastrarProduto = () => {
    fetch("https://systemawebreal.onrender.com/api/produtos/cadastrarProduto", {
    //fetch("http://localhost:8080/api/produtos/cadastrarProduto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(produtoSelecionado)
    })
      .then(resposta => resposta.json())
      .then(dados => {
        setProdutos(prev => [...prev, dados]);
        listarProdutos();
        cancelarProduto();
      })
      .catch(error => console.error("Erro ao cadastrar produto:", error));
  };

  const selecionarProdutoEspecifico = (indice) => {
    setProdutoSelecionado(produtos[indice]);
    setBotaoProduto(false);
  };

  const cancelarProduto = () => {
    setProdutoSelecionado({ 
        id: null, 
        nome: "", 
        tipoLente: "VISAO SIMPLES",
        tipoMaterial: "RESINA",
        linha: "VS AR CHAVE 01",
        grauEsferico: "-000",
        grauCilindrico: "-000",
        quantidade: "",
        precoCompra: "",
        precoVenda: "" });
    setBotaoProduto(true);
  };

// Buscar produtos ao abrir a tela
useEffect(() => {
   listarProdutos();
   listarGrausEsferico();
   listarUsuario();
}, []);

// Função para listar todos os produtos
const listarProdutos = () => {
  //fetch("http://localhost:8080/api/produtos/listarProdutos")
  fetch("https://systemawebreal.onrender.com/api/produtos/listarProdutos")
    .then(resposta => resposta.json())
    .then(dados => {
      setProdutos(dados);
    })
    .catch(error => console.error("Erro ao buscar produtos:", error));
};

const listarGrausEsferico = () => {
 //fetch("http://localhost:8080/api/grau/listarGrausEsferico")
 fetch("https://systemawebreal.onrender.com/api/grau/listarGrausEsferico")
    .then(res => res.json())
    .then(dados => {
        setGrausEsfericos(dados);
        console.table(dados);
    })
    .catch(err => console.error("Erro ao buscar graus esféricos:", err));
};
const listarUsuario = () => {
        fetch("https://systemawebreal.onrender.com/api/usuarios/listarUsuarios")
        .then(resposta => resposta.json())
        .then(dados => {
            setPessoas(dados);
            console.table(dados);
        })
        .catch(error => console.error("Erro ao buscar usuários:", error));
    };

const alterarProduto = () => {
  //fetch("http://localhost:8080/api/produtos/alterarProduto/" + produtoSelecionado.id, {
  fetch("https://systemawebreal.onrender.com/api/produtos/alterarProduto/" + produtoSelecionado.id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(produtoSelecionado)
  })
    .then(resposta => resposta.json())
    .then(() => {
      listarProdutos();   // recarrega a lista completa
      cancelarProduto();
    })
    .catch(error => console.error("Erro ao alterar produto:", error));
};

const deletarProduto = () => {
  //fetch("http://localhost:8080/api/produtos/deletarProduto/" + produtoSelecionado.id, {
  fetch("https://systemawebreal.onrender.com/api/produtos/deletarProduto/" + produtoSelecionado.id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  })
    .then(resposta => {
      if (resposta.ok) {
        listarProdutos();   // recarrega a lista completa
        cancelarProduto();
      }
    })
    .catch(error => console.error("Erro ao deletar produto:", error));
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
          {/* Venda */}
          <Route path="vendas" element={<Venda />} />
          <Route
            path="produto"
            element={
              <>
                <Produto
                  botao={botaoProduto}
                  produtoSelecionado={produtoSelecionado}
                  atualizarProdutoSelecionado={atualizarProdutoSelecionado}
                  cadastrarProduto={cadastrarProduto}
                  cancelar={cancelarProduto}
                  alterar={alterarProduto}         // <-- novo
                  deletar={deletarProduto}         // <-- novo
                  grausEsfericos={grausEsfericos}
                />
                <TabelaProduto
                    registros={produtos}
                    funcaoSelecionar={selecionarProdutoEspecifico}
                />
              </>
            }
            
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
