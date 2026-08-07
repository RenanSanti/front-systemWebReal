import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout-wrapper">
      {/* Cabeçalho fixo */}
      <header className="layout-header">
        <div className="layout-container">
          <h1 className="logo">Systema Web Real</h1>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Usuários</Link></li>
              <li><Link to="/vendas">Vendas</Link></li>
              <li><Link to="/produto">Produtos</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Conteúdo dividido */}
      <main className="layout-main">
        <div className="layout-container">
          {/* Área de formulário/outlet */}
          <div className="form-area">
            <Outlet />
          </div>

          
          
        </div>
      </main>

      {/* Rodapé fixo */}
      <footer className="layout-footer">
        <small>©Copyright 2026 - Desenvolvido por Renan Santiago Correia</small>
      </footer>
    </div>
  );
}

export default Layout;
