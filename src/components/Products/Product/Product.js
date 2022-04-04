import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import "./Product.css";

import { loadCurrentItem, addToCart } from "../../../redux/Shopping/actions";

const Product = ({ product }) => {
  return (
    <Card className="product__card" key={product.id} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} width="200px" />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          £{product.price}
        </Card.Subtitle>
        <Card.Link
          href={`/product/${product.id}`}
          className="button"
          onClick={() => loadCurrentItem(product)}
        >
          View Item
        </Card.Link>
        <Card.Link className="button" onClick={() => addToCart(product.id)}>
          Add to Cart
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
