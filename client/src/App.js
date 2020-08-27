import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';
import Vacantes from './components/vacantes.jsx';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


function App() {
  return (
    <div className="contenPrin">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <img src="https://api.hiringroom.com/images/logo_small.png" className="App-logo" alt="logo" />
          <span className="navbar-brand"> HiringRoom </span>
          <div className="w-100">
            <Input placeholder="buscar" type="text" color='secondary'></Input>

            <Button variant="contained">
               Buscar vacante!
            </Button>

          </div>
            
        </nav>
        <Vacantes />
      </div>
  );
}

export default App;
