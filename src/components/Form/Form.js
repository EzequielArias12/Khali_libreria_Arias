import "./Form.css"
import { Button} from "react-bootstrap";
import { useState } from "react";
import { useCartContext } from "../../context/CartProvider";
import {getFirestore} from "../../firebase/firebase"
import { collection, addDoc } from "@firebase/firestore";

export function Form (total) {
  const { cart } = useCartContext();

  const [client, setClient] = useState({name: "", email: "", tel: ""
  })
 
  const handleClientOnChange = (e) =>{
    setClient({...client, [e.target.name]: e.target.value  })
  }

  

  const finalizarCompra = (e) => {
    e.preventDefault();
    const order = {
      cliente: client,
      items: cart,
      total:total
    }


    const db= getFirestore();
    const ordersCollection = collection(db, "orders")

    addDoc(ordersCollection, order).then(({id})=> {
      console.log(id);
      alert(`Su numero de compra es ${id}`)
    });
        
  }

    return (
        <>
        <form id="my-form" onSubmit={finalizarCompra}>
            <label>Nombre</label>
            <input type="text" name="name" value={client.name} onChange={handleClientOnChange} required/>
            <label>Email</label>
            <input type="email" name="email" value={client.email} onChange={handleClientOnChange} required/>
            <label>Telefono</label>
            <input type="number" name="tel" value={client.tel} onChange={handleClientOnChange} required/>
            <Button type="submit" disabled={!(client.name && client.email && client.tel)}>Finalizar compra</Button>     
          </form>
        
        </>
     )
}