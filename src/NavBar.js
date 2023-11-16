
import React from 'react';
import CartWidget from './CartWidget';
import miLogo from './img/AKIAMAIlogo.png';
import './App.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <a className="navbar-brand" href="#">
        <img src={miLogo} alt="Aki amai logo" style={{ width: '100px', height: 'auto' }} />
      </a>
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
            <a className="nav-link" href="#">
              Inicio <span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Productos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contacto
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Nosotros
            </a>
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