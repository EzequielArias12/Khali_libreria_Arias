import { Item } from "../Item/item";
import './ItemList.css'
import Loader from 'react-loaders'

export function ItemList({ items }) {
  return (
    <div className="list-container">
      {items.length ? (
        items.map((items) => <Item item={items} key={items.id} />)
      ) : (
        <div className="item-list">
           <Loader type="ball-grid-pulse" />
        </div>
      )}
    </div>
  );
}