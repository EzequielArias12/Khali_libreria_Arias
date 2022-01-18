import React from 'react';
import './ItemListContainer.css';
import {Card} from 'react-bootstrap';
import ItemCount from '../ItemCount/index';

const ItemListContainer = () => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src=".js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <ItemCount/>
  </Card.Body>
</Card>
        </>
    )
}

export default ItemListContainer;