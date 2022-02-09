import { useState} from 'react';
import { Button } from 'react-bootstrap';


function ItemCount({inStock,onAdd}) {

  const [stock, setStock] = useState(inStock);

    const [count, setCount] = useState(1);
   
    const incrementar = (factor = 1) => {
        if(stock > 0){
             setCount(count + factor);
             setStock(stock - factor);
        }else{
            setStock(0);
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
    
    <div >
      <h4>Count{count}</h4>

      <Button 
      onClick={ () => incrementar()}
      
      >
        + 1
      </Button>

      <Button 
      onClick={() => {
        onAdd(count);
      }}
      
      >
        agregar al carrito
      </Button>

      <Button 
      onClick={ () => decrementar()}

      >
        - 1
      </Button>
    </div>
  );
}

export default ItemCount;
