import ItemCount from '../ItemCount/ItemCount';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import { useCartContext } from "../../context/CartProvider";

export function ItemDetail({ item }) {

  const { addItem } = useCartContext();

  const [cartButton, setCartButton] = useState(true);

  const [quantityToAdd, setQuantity] = useState(null);

  const onAdd = (quantity) => {
    if (quantity >= 1) {
      setQuantity(quantity);
      setCartButton(false);
      addItem(item, quantity);
    }
  };


  return (
    <>
    <div className="card" >
  <img src={item.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">{item.descripcion}</p>
    <p>${item.precio}</p>
    <p>(Stock:{item.stock})</p>
    {cartButton ? (
          <ItemCount inStock={item.stock} onAdd={onAdd} />
        ) : (
          <Link to="/cart">
            <Button>Ver {quantityToAdd} productos en el carrito</Button>
          </Link>
        )}
    
  </div>
</div>
    </>
  );
}