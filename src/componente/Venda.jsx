import React, { useState } from "react";
import "./Vendas.css";

function Vendas() {
  const [form, setForm] = useState({
    os: "",
    cliente: "",
    otica: "REALGOLD COMERCIO DE PRODUTOS",
    prisma: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div className="vendas-wrapper">
      <div className="vendas-card">
        <h2>📋 Dados do Pedido</h2>

        <div className="form-section">
          <div className="form-row">
            <label htmlFor="os">Sua OS</label>
            <input
              id="os"
              type="text"
              name="os"
              value={form.os}
              onChange={handleChange}
              placeholder="Digite o número da OS"
            />
          </div>

          <div className="form-row">
            <label htmlFor="cliente">Nome do cliente</label>
            <input
              id="cliente"
              type="text"
              name="cliente"
              value={form.cliente}
              onChange={handleChange}
              placeholder="Digite o nome do cliente"
            />
          </div>

          <div className="form-row">
            <label htmlFor="otica">Nome da ótica</label>
            <input
              id="otica"
              type="text"
              name="otica"
              value={form.otica}
              onChange={handleChange}
            />
          </div>
        </div>

        <h3>👓 Esférico / Cilíndrico / Eixo</h3>
        <div className="lentes-grid">
          <div className="lente-col">
            <span>O.D.</span>
            <input placeholder="Esférico" />
            <input placeholder="Cilíndrico" />
            <input placeholder="Eixo" />
          </div>
          <div className="lente-col">
            <span>O.E.</span>
            <input placeholder="Esférico" />
            <input placeholder="Cilíndrico" />
            <input placeholder="Eixo" />
          </div>
        </div>

        <h3>📏 DNP / Altura</h3>
        <div className="medidas-grid">
          <div className="medida-col">
            <span>O.D.</span>
            <input placeholder="DNP" />
            <input placeholder="Altura" />
          </div>
          <div className="medida-col">
            <span>O.E.</span>
            <input placeholder="DNP" />
            <input placeholder="Altura" />
          </div>
        </div>

        <div className="checkbox-row">
          <label>
            <input
              type="checkbox"
              name="prisma"
              checked={form.prisma}
              onChange={handleChange}
            />
            Incluir Prisma
          </label>
        </div>
      </div>
    </div>
  );
}

export default Vendas;
