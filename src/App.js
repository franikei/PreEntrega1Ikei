// App.js
import React from 'react';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import './App.css'; 

const App = () => {
  return (
    <div className="custom-app-container"> 
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a Aki Amai!" />
    </div>
  );
};

export default App;