/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/index';
import { ItemList } from "../ItemList/ItemList";
import Productos from '../../Productos.json';


 const ItemListContainer = ({ title }) => {
  const [productos, setProductos] = useState([]);

  const getProductos = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("No se encontró ningun elemento");
        }
      }, 2000);
    });

  useEffect(() => {
    getProductos(Productos)
      .then((result) => setProductos(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="itemListContainer">
      <div className="listaProductos">
        <ItemList items={productos} />
      </div>
      <ItemCount/>
    </div>
  );
};

export default ItemListContainer;