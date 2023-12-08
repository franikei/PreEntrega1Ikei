return (
  <div className="item-detail-container">
    {producto ? (
      <>
        <h2>{producto.nombre}</h2>
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="item-image"
          style={{ maxWidth: '10%', height: 'auto' }}
        />
        <p className="item-description">{producto.descripcion}</p>
        <p className="item-price">${producto.precio}</p>
      </>
    ) : (
      <p>Cargando...</p>
    )}
  </div>
);