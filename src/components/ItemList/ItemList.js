import { Item } from "../Item/item";
import './ItemList.css'

export function ItemList({ items }) {
  return (
    <div className="list-container">
      {items.length
        ? items.map((items) => <Item item={items} key={items.id} />)
        : "Loading..."}
    </div>
  );
}