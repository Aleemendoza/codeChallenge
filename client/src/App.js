import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css'

function App() {
  return (
    <div className="contenPrin">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <img src="https://api.hiringroom.com/images/logo_small.png" className="App-logo" alt="logo" />
          <span className="navbar-brand"> HiringRoom </span>
          <div className="w-100">
            <input placeholder= "buscar" type="text"></input>
          
          </div>
        </nav>
      </div>
  );
}

export default App;
