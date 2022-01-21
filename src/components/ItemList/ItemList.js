import { Item } from "../Item/item";

export function ItemList({ items }) {
  return (
    <>
      {items.length
        ? items.map((items) => <Item item={items} key={items.id} />)
        : "Loading..."}
    </>
  );
}