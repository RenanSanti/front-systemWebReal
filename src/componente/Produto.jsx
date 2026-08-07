import React, { useState } from "react";
import "./Produto.css";

function Produtos() {
  const [form, setForm] = useState({
    tipoProduto: "Visão Simples",
    material: "",
    nome: "",
    quantidade: 0,
    precoEntrada: "",
    precoSaida: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do produto:", form);
    // Aqui você pode integrar com seu backend via fetch/axios
  };

  return (
    <div className="produtos-wrapper">
      <div className="produtos-card">
        <h2>📦 Cadastro de Produtos</h2>

        <form onSubmit={handleSubmit} className="form-section">
          <div className="form-row">
            <label htmlFor="tipoProduto">Tipo do Produto</label>
            <select
              id="tipoProduto"
              name="tipoProduto"
              value={form.tipoProduto}
              onChange={handleChange}
            >
              <option value="Visão Simples">Visão Simples</option>
              <option value="Multifocal">Multifocal</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="material">Tipo do Material</label>
            <select
              id="tipoMaterial"
              name="tipoMaterial"
              value={form.tipoMaterial}
              onChange={handleChange}
            >
              <option value="Resina">Resina</option>
              <option value="Policarbonato">Policarbonato</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="nome">Nome do Produto</label>
            <input
              id="nome"
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              placeholder="Digite o nome do produto"
            />
          </div>

          <div className="form-row">
            <label htmlFor="quantidade">Quantidade</label>
            <input
              id="quantidade"
              type="number"
              name="quantidade"
              value={form.quantidade}
              onChange={handleChange}
              min="0"
            />
          </div>

          <div className="form-row">
            <label htmlFor="precoEntrada">Preço de Entrada</label>
            <input
              id="precoEntrada"
              type="number"
              name="precoEntrada"
              value={form.precoEntrada}
              onChange={handleChange}
              step="0.01"
              placeholder="R$"
            />
          </div>

          <div className="form-row">
            <label htmlFor="precoSaida">Preço de Saída</label>
            <input
              id="precoSaida"
              type="number"
              name="precoSaida"
              value={form.precoSaida}
              onChange={handleChange}
              step="0.01"
              placeholder="R$"
            />
          </div>

          <button type="submit" className="btn-salvar">
            💾 Salvar Produto
          </button>
        </form>
      </div>
    </div>
  );
}

export default Produtos;
