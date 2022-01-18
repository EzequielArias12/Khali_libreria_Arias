import {useState} from 'react'
import swal from 'sweetalert';

function useCount(initialState = 1,stock = 5) {

    const [state, setState] = useState(initialState);

    const incrementar = (factor = 1) => {
        if(state > stock){
            swal("Oops..","Nos quedamos sin Stock")
        }else{
            setState(state + factor)
        }
    };  

    const decrementar = (factor = 1) =>{
        if(state <= 0){
            swal("Se ha eliminado el articulo del contador")
        }else{
            setState(state - factor)
        }
    };    

    const reset = () => setState(initialState);

    return {
        state,
        incrementar,
        decrementar,
        reset
    }
}

export default useCount;
