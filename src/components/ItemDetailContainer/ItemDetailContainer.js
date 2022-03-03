import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";
import './ItemDetailContainer.css';
import { getFirestore } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import Loader from 'react-loaders'

export function ItemDetailContainer() {
  const [itemDetail, setItemDetail] = useState();

  const { itemId } = useParams();

  useEffect(() => {
    const db = getFirestore(); 
    const item = doc(db, "item", itemId);
    getDoc(item).then((snapshot) => {
      if (snapshot.exists()) {
        setItemDetail(snapshot.data());
      }
    });
  }, [itemId]);

  return (
    <div className="itemDetailContainer">
    {itemDetail ? (
        <ItemDetail item={itemDetail} />
      ) : (
        <div className="item-detail-carga">
        <Loader type="ball-grid-pulse" />
          <h2>¡Buenisima elección!</h2>
        </div>
      )}
  </div>
  );
}