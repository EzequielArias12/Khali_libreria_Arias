import { useState} from 'react';
import swal from "sweetalert"

import './ItemCount.css';

function ItemCount({inStock,onAdd}) {

  const [stock, setStock] = useState(inStock);

    const [count, setCount] = useState(0);
   
    const incrementar = (factor = 1) => {
        if(stock === 0){
               swal("Ya no hay stock");
        }else{
            setCount(count + factor);
             setStock(stock - factor);
        }
    };  

    const decrementar = (factor = 1) =>{
        if (count === 0) {
            setCount(0);
          } else {
            setCount(count - factor);
            setStock(stock + factor);
          }
    };    
        

  return (
    <>
    <div className="mobile-css">
    <div  className='button-container'>
      <button 
      onClick={ () => incrementar()}
      
      >
        + 1
      </button>

      <h4>{count}</h4>

      <button 
      onClick={ () => decrementar()}

      >
        - 1
      </button>

    </div>
       
      <button 
      className="btn-primary btn-add" 
      onClick={() => {
        onAdd(count);
      }}
      >
        Agregar al carrito
      </button> 
    </div>
    
    </>
  );
}

export default ItemCount;
