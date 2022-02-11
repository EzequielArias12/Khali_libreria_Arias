/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react';
import './ItemListContainer.css';
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router";
import { getDocs, getFirestore } from "@firebase/firestore";
import { collection, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  
  const { categoriaId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let q = query(collection(db, "Productos"));

    if (!categoriaId) {
      getDocs(q).then((snapshot) => {
        setProductos(snapshot.docs.map((doc) => doc.data()));
      });
    } else {
      const q = query(
        collection(db, "Productos"),
        where("category", "==", categoriaId)
      );
      getDocs(q).then((snapshot) => {
        setProductos(snapshot.docs.map((doc) => doc.data()));
      });
    }
  }, [categoriaId]);

  return (
    <div className="itemListContainer">
      <div className="listaProductos">
        <ItemList items={productos} />{console.log(productos)}

      </div>
    </div>
  );
};