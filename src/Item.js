import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`} className='text-decoration-none'>
      <div className='item-container'>
        <div className='card border border-0'>
          <img
            src={item.imagen}
            className='card-img-top'
            alt={item.nombre}
            style={{ maxWidth: '300px', height: '300px' }}
          />
          <div className='card-body text-center'>
            <p className='card-text'>{item.nombre}</p>
            <p className='card-text'>$ {item.precio}</p> 
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Item;