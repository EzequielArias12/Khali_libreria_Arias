import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";
import './ItemDetailContainer.css';
import { getFirestore } from "../../firebase/firebase";
import { doc, getDoc } from "@firebase/firestore";

export function ItemDetailContainer() {
  const [itemDetail, setItemDetail] = useState();

  const { itemId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const item = doc(db, "Productos", itemId);
    getDoc(item).then((snapshot) => {
      if (snapshot.exists()) {
        setItemDetail(snapshot.data());
      }
    });
  }, [itemId]);

  return (
    <div className="itemDetailContainer">
        {itemDetail ? <ItemDetail item={itemDetail} /> : "cargando..."}
    </div>
  );
}