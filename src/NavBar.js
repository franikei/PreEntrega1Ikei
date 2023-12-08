import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import miLogo from './img/AKIAMAIlogo.png';
import './App.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <img src={miLogo} alt="Aki amai logo" style={{ width: '100px', height: 'auto' }} />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Inicio <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/productos" className="nav-link">
              Productos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/combos" className="nav-link">
              Combos
            </Link>
          </li>
          
          <li className="nav-item">
            <CartWidget itemCount={14} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;