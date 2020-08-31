import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

export default function BarraNav(){


  return (
    <div className="contenPrin">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <img src="https://api.hiringroom.com/images/logo_small.png" className="App-logo" alt="logo" />
          <span className="navbar-brand"> HiringRoom </span>
          <div className="w-100">
            <Input placeholder="buscar" type="text" color='secondary'></Input>

            <Button href="http://localhost:3000/vacantes" variant="contained">
               Buscar vacante!
            </Button>

          </div>
            
        </nav>
    </div>
  )
}

