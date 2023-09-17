import React from 'react';
import logo from './logo.svg';
import NavBar from './NavBar.jsx'; // Importa NavBar.jsx desde la carpeta 'component'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TIENDA DE SEGUROS
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <NavBar /> {/* Agrega el componente NavBar aquí */}
    </div>
  );
}

export default App;

