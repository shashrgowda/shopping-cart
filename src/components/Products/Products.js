import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import "./Products.css";

const Products = ({ products }) => {
  return (
    <div className="Products">
      {products.map((product) => (
        <Card className="Product" key={product.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.image} width="200px" />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
