import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './item.css';

export const Item = ({ item }) => {
  return (
    <Card className="card" key={item.id} style={{ width: "16rem" }}>
      <Link to={`/item/${item.id}`}>
        <Card.Img variant="top" src={item.img} />
      </Link>
      <Card.Body>
        <Card.Title className="name">{item.name}</Card.Title>
        <p className="price">${item.precio}</p>

        <Link to={`/item/${item.id}`}>
          <Button variant="primary" className="btn-show">Ver producto</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};