
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 

const CartWidget = ({ itemCount }) => {
  return (
    <div style={styles.cartWidget}>
      <FaShoppingCart style={styles.cartIcon} />
      <span style={styles.notification}>{itemCount}</span>
    </div>
  );
};

const styles = {
  cartWidget: {
    position: 'relative',
    cursor: 'pointer',
  },
  cartIcon: {
    fontSize: '2rem',
  },
  notification: {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%',
    padding: '4px 8px',
    fontSize: '0.8rem',
  },
};

export default CartWidget;