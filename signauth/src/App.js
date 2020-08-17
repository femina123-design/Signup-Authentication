import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Sitepage from './Layout/Sitepage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Sitepage></Sitepage>
    </div>
    </BrowserRouter>
  );
}

export default App;
