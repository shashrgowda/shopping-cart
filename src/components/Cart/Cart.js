import React, { useState, useEffect } from "react";
import "./Cart.css";

import { connect } from "react-redux";

import CartItem from "./CartItem/CartItem";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      const itemTotal = item.price * item.qty;
      const threshold = item.qty / item.discountQty;

      if (item.id === 1) {
        price +=
          item.qty % 2 === 0 ? itemTotal - item.qty + threshold : item.price;
      } else {
        price += item.qty % 6 === 0 ? itemTotal - item.price : itemTotal;
      }
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className="cart">
      <div className="cart__items">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} totalPrice={totalPrice} />
        ))}
      </div>
      <div className="cart__summary">
        <h4 className="summary__title">Cart Summary</h4>
        <div className="summary__price">
          <span>TOTAL: ({totalItems} items)</span>
          <span>£ {totalPrice.toFixed(2)}</span>
        </div>
        <button className="summary__checkoutBtn">Proceed To Checkout</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
