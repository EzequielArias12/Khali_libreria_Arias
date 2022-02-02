import ItemCount from '../ItemCount/ItemCount';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';

export function ItemDetail({ details }) {


  const [cartButton, setCartButton] = useState(true);

  const [quantityToAdd, setQuantityToAdd] = useState(null);

  const onAdd = (quantityToAdd) => {
    if (quantityToAdd >= 1) {
      setQuantityToAdd(quantityToAdd);
      setCartButton(false);
    }
  };


  return (
    <>
    <div className="card" >
  <img src={details.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{details.name}</h5>
    <p className="card-text">{details.descripcion}</p>
    <p>${details.precio}</p>
    <p>(Stock:{details.stock})</p>
    {cartButton ? (
          <ItemCount inStock={details.stock} onAdd={onAdd} />
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