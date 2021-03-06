import ItemCount from '../ItemCount/ItemCount';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import { useCartContext } from "../../context/CartProvider";
import './ItemDetail.css'

export function ItemDetail({ item }) {

  const { addItem, cart } = useCartContext();

  const [cartButton, setCartButton] = useState(true);

  const [quantity, setQuantity] = useState(null);

  
  const onAdd = (quantity) => {
    if (quantity >= 1) {
      setQuantity(quantity);
      setCartButton(false);
      addItem(item, quantity);
    }
  };

  const isInCart = cart.find(p => p.id === item.id);
  const update= ()=> {
    if(isInCart){
    const updateStock = isInCart.stock - isInCart.cantidad 
    //muestra la cantidad de stock restante si se confirma la compra
    return updateStock;
    }
    
  }


  return (
    <>
    <div className="mainContainer">
      <nav className="producPreview">
      <img src={item.img} alt={item.name} />
      </nav>
      <div className="productData">
        <h1 className="productTitle">{item.name}</h1>
        <p className="description">{item.descripcion}</p>
        <p>${item.precio}</p>
        {isInCart ? (<p>Stock:{update()}</p>)
        : (<p>Stock:{item.stock}</p>)}
        
        {cartButton ? (
          //muestra el stock disponible si se confirma la compra
          <ItemCount inStock={item.stock} updateStock={update()} onAdd={onAdd} />
        ) : (
          <Link to="/cart">
            <Button>Ver {quantity} productos en el carrito</Button>
          </Link>
        )}
      </div>
   
    </div>
    </>
  );
}