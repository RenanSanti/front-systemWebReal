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
              className="input"
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
              className="input"
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
              className="input"
              onChange={handleChange}
            />
          </div>
        </div>

        <h3>👓 Esférico / Cilíndrico / Eixo</h3>
        <div className="lentes-grid">
          <div className="lente-col">
            <span>O.D.</span>
            <input id="esferico-od" type="text" placeholder="Esférico" className="input"/>
            <input id="cilindrico-od" type="text" placeholder="Cilíndrico"className="input"/>
            <input id="eixo-od" type="text" placeholder="Eixo" className="input"/>
          </div>
          <div className="lente-col">
            <span>O.E. </span>
            <input id="esferico-oe" type="text" placeholder="Esférico"className="input"/>
            <input id="cilindrico-oe" type="text" placeholder="Cilíndrico" className="input"/>
            <input id="eixo-oe" type="text" placeholder="Eixo" className="input"/>
          </div>
        </div>

        <h3>📏 DNP / Altura</h3>
        <div className="medidas-grid">
          <div className="medida-col">
            <span>O.D.</span>
            <input id="dnp-od" className="input" type="text" placeholder="DNP" />
            <input id="altura-od" className="input" type="text" placeholder="Altura" />
          </div>
          <div className="medida-col">
            <span>O.E.</span>
            <input id="dnp-oe" className="input" type="text" placeholder="DNP" />
            <input id="altura-oe" className="input" type="text" placeholder="Altura" />
          </div>
        </div>

        <div className="checkbox-row">
            <input
                type="checkbox"
                name="prisma"
                checked={form.prisma}
                onChange={handleChange}/>
            <label>
              Incluir Prisma
            </label>
            </div>
        <div className="checkbox-row">  
            <input type="button" className="btn btn-primary" value=" Cadastrar Venda"  />
        </div>
      </div>
    </div>
  );
}

export default Vendas;
