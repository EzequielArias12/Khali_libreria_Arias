
import {useState} from 'react'



function ItemCount({inStock,onAdd}) {

    const [count, setCount] = useState(1);
    const [stock, setStock] = useState(inStock);

    const incrementar = () => {
        if(stock > 0){
             setCount(count + 1);
             setStock(stock - 1);
        }else{
            setStock(0);
        }
    };  

    const decrementar = () =>{
        if (count === 0) {
            setCount(0);
          } else {
            setCount(count - 1);
            setStock(stock + 1);
          }
    };    
        

  return (
    
    <div >
      <h4>Count{count}</h4>

      <button 
      onClick={ () => incrementar()}
      className='btn btn-primary mx-1'
      >
        + 1
      </button>

      <button 
      onClick={() => {
        onAdd(count);
      }}
      className='btn btn-danger mx-2'
      >
        agregar al carrito
      </button>

      <button 
      onClick={ () => decrementar()}
      className='btn btn-secondary mx-2'
      >
        - 1
      </button>
    </div>
  );
}

export default ItemCount;
