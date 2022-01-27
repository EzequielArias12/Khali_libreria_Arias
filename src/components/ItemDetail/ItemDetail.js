import ItemCount from '../ItemCount/ItemCount';

export function ItemDetail({ details }) {
  return (
    <div className="item-detail">
      <div className="item-detail-img">
        <img className="detail-img" src={details.img} alt="" />
      </div>
      <div className="detalle">
        <h1>{details.name}</h1>
        <p className="descripcion">{details.descripcion}</p>
        <p>${details.precio}</p>
        <ItemCount />
      </div>
    </div>
  );
}