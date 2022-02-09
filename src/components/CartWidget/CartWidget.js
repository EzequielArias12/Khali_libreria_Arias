import React from 'react';
import './CartWidget.css';
import { useCartContext } from '../../context/CartProvider';
import {Link} from 'react-router-dom';


   const CartWidget = (props) => {
    const { cart } = useCartContext();
    console.log("carrito", cart);
  
    const totalProductos = cart.reduce(
      (counter, item) => counter + item.cantidad,
      0
    );

    console.log(totalProductos, "total productos");
    return (
      <div className="cart-container">
        {cart.length ? (
          <>
            <p className="productos-carrito">{totalProductos}</p>
            <Link to="/cart">
            <button className="btn-cart"><i className="fas fa-shopping-cart"></i></button>
            </Link>
          </>
        ) : (
          <Link to="/cart">
              <button className="btn-cart"><i className="fas fa-shopping-cart"></i></button>
          </Link>
        )}
      </div>
    );
  };

  export default CartWidget;