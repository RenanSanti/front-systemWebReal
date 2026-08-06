import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Cabeçalho fixo */}
      <header className="bg-dark text-white p-3">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="h4">Systema Web Real</h1>
          <nav>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Cadastro</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/segunda">Segunda Tela</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Conteúdo centralizado */}
      <main className="flex-grow-1 d-flex align-items-center justify-content-center">
        <div className="container">
          <Outlet />
        </div>
      </main>

      {/* Rodapé fixo */}
      <footer className="bg-light text-center p-3 mt-auto">
        <small>© 2026 - Desenvolvido por Renan Santiago Correia</small>
      </footer>
    </div>
  );
}

export default Layout;
