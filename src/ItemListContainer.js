
import React from 'react';
import './App.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={styles.itemListContainer}>
      <p style={styles.greeting}>{greeting}</p>
    </div>
  );
};

const styles = {
  itemListContainer: {
    padding: '20px',
    textAlign: 'center',
  },
  greeting: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
};

export default ItemListContainer;