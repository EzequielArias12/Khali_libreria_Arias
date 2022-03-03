/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react';
import './ItemListContainer.css';
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router";
import { getDocs, getFirestore } from "@firebase/firestore";
import { collection, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  
  const { categoryId } = useParams();
  
useEffect(() => {
    const db = getFirestore();
    let q = query(collection(db, "item"));
//snapshot.docs.map((doc) => doc.data())
    if (!categoryId) {
      getDocs(q).then((querySnapshot) => {
        setProductos(querySnapshot.docs.map((doc) => {
          return {
            id :
            doc.id,...doc.data()
          };
        }));
      });
    } else {
      const q = query(
        collection(db, "item"),
        where("category", "==", categoryId)
      ); 

      getDocs(q).then((querySnapshot) => {
        setProductos(querySnapshot.docs.map((doc) => {
          return {
            id :
            doc.id,...doc.data()
          };
        }));
      });
    }
  }, [categoryId]);

  return (
    <div className="itemListContainer">
      <div className="listaProductos">
        <ItemList items={productos} />

      </div>
    </div>
  );
};