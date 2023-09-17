import React from 'react';
import logo from './logo.svg';
import NavBar from './component/NavBar/NavBar'; // Asegúrate de que la ruta sea correcta
import CartWidget from './component/CartWidget/CartWidget'; // Asegúrate de que la ruta sea correcta

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
      <CartWidget /> {/* Agrega el componente CartWidget aquí */}
    </div>
  );
}

export default App;



