import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productosData from './productos.json';
import './item.css';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Simula la carga de datos desde el archivo JSON local
    const productoEncontrado = productosData.find((p) => p.id === parseInt(id, 10));

    if (productoEncontrado) {
      setProducto(productoEncontrado);
    } else {
      // Manejar el caso en el que no se encuentre el producto
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
          {/* Agrega más detalles según sea necesario */}
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;