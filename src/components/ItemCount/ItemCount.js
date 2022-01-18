import useContador from '../../hooks/useContador';



function ItemCount() {

  const {state : count,decrementar,incrementar,reset} =  useContador(1)

  
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
      onClick={reset}
      className='btn btn-danger mx-2'
      >
        reset
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
