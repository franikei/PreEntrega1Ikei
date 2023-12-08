import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Productos from './Productos';
import Combos from './Combos';

const App = () => {
  return (
    <Router>
      <div className="custom-app-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a Aki Amai!" />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/productos" element={<Productos />} /> 
          <Route path="/combos" element={<Combos />} /> 
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;