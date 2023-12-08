import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productosData from './productos.json';
import './item.css';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
   
    const productoEncontrado = productosData.find((p) => p.id === parseInt(id, 10));

    if (productoEncontrado) {
      setProducto(productoEncontrado);
    } else {
      
      console.error(`Producto con ID ${id} no encontrado`);
    }
  }, [id]);

  return (
    <div className="item-detail-container">
      {producto ? (
        <>
          <h2>{producto.nombre}</h2>
          <img src={producto.imagen} alt={producto.nombre} className="item-image" />
          <p className="item-description">{producto.descripcion}</p>
          <p className="item-price">${producto.precio}</p>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;