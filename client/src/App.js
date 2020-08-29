import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './app.css';


import Vacantes from './components/vacantes.jsx';
import InicioSesion from './components/home.js';
import Registro from './components/registro.jsx'

function App() {
  return (
      <div className="App">
      
        <BrowserRouter >

          <Route exact path='/vacantes' component={ Vacantes } />
          <Route exact path='/registro' component={Registro} />
          <Route exact path='/' component={InicioSesion} />

        </BrowserRouter>
    </div>
  );
}

export default App;

   