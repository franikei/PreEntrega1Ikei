import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import productosData from './productos.json'; 
import './item.css';

const ItemListContainer = ({ greeting, categoryId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    const filteredProducts = productosData.filter(
      (product) => product.categoria === categoryId
    );

    setProducts(filteredProducts);
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <p className="greeting">{greeting}</p>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="item-container">
            <Link to={`/item/${product.id}`}>
              <img src={product.imagen} alt={product.nombre} className="item-image" />
              <div className="item-name">{product.nombre}</div>
              <div className="item-price">${product.precio}</div>
              <p>{product.descripcion}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;