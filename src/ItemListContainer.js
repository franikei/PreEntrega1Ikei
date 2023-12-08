import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productosData from './productos.json';
import './item.css';
import ItemList from './ItemList';  

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(id ? productosData.filter((item) => item.categoria === id) : productosData);
          }, 2000);
        });
        setItems(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className='container'>
      <div className='row'>
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;