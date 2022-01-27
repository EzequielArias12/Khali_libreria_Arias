/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react';
import './ItemListContainer.css';
import { ItemList } from "../ItemList/ItemList";
import Productos from '../../Productos.json';
import { useParams } from "react-router";

export const ItemListContainer = ({ title }) => {
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams();

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
      .then((result) => {
        categoriaId
          ? setProductos(
              result.filter((producto) => producto.categoria === categoriaId)
            )
          : setProductos(Productos);
      })
      .catch((err) => console.log(err));
  }, [categoriaId]);

  return (
    <div className="itemListContainer">
      <div className="listaProductos">
        <ItemList items={productos} />
      </div>
    </div>
  );
};