import React from "react";
import "./ProductDetail.css";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/actions";

const ProductDetail = ({ current, addToCart }) => {
  return (
    <div className="productDetail">
      <img
        className="productDetail__image"
        src={current.image}
        alt={current.title}
      />
      <div className="productDetail__details">
        <p className="details__title">{current.title}</p>
        <p className="details__description">{current.description}</p>
        <p className="details__price">£ {current.price.toFixed(2)}</p>

        <button
          onClick={() => addToCart(current.id)}
          className="details__addBtn"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
