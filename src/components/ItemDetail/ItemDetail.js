import ItemCount from '../ItemCount/ItemCount';

export function ItemDetail({ details }) {
  return (
    <>
    <div className="card" >
  <img src={details.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{details.name}</h5>
    <p className="card-text">{details.descripcion}</p>
    <p>${details.precio}</p>
    <ItemCount />
  </div>
</div>
    </>
  );
}