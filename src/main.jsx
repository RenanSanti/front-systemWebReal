// Importar o createRoot do ReactDOM
import { createRoot } from "react-dom/client";
import App from "./App";

// Selecionar o elemento raiz do DOM
const rootElement = document.getElementById("root");

// Criar a raiz do React
const root = createRoot(rootElement);

// Renderizar o componente App dentro da raiz
root.render(<App />); 