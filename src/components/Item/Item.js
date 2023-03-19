import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function Item(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.price}</Card.Text>
        <Link to={`/item/detail/${props.id}`}>
          <Button variant="primary">Ver detalle</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;