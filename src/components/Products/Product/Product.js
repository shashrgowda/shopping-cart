import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import "./Product.css";

import { loadCurrentItem, addToCart } from "../../../redux/Shopping/actions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <Card className="product__card" key={product.id} style={{ width: "18rem" }}>
      <Link to={`/product/${product.id}`}>
        <Card.Img
          variant="top"
          src={product.image}
          width="200px"
          onClick={() => loadCurrentItem(product)}
        />
      </Link>

      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          £{product.price.toFixed(2)}
        </Card.Subtitle>
        <button className="button" onClick={() => addToCart(product.id)}>
          Add To Cart
        </button>
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
