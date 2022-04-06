import React, { useState, useEffect } from "react";
import "./Cart.css";

import { connect } from "react-redux";

import CartItem from "./CartItem/CartItem";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [totalActualAmount, setTotalActualAmount] = useState(0);
  const [totalDiscountPrice, setTotalDiscountAmount] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;
    let actualPrice = 0;

    cart.forEach((item) => {
      items += item.qty;
      actualPrice += item.qty * item.price;
      const itemTotal = item.price * item.qty;
      const threshold = item.qty / item.discountQty;
      const quotient = Math.floor(item.qty / item.discountQty);

      if (item.id === 1) {
        price +=
          item.qty % item.discountQty === 0
            ? itemTotal - item.qty + threshold
            : itemTotal - item.qty + threshold + item.price - item.discountQty;
      } else {
        price +=
          item.qty % item.discountQty === 0
            ? itemTotal - item.price
            : (itemTotal - item.price * (item.qty - 1)) * item.qty -
              item.price * quotient;
      }
    });

    const discountedAmt = totalActualAmount - totalPrice;

    setTotalItems(items);
    setTotalPrice(price);
    setTotalActualAmount(actualPrice);
    setTotalDiscountAmount(discountedAmt);
  }, [
    cart,
    totalPrice,
    totalItems,
    totalActualAmount,
    totalDiscountPrice,
    setTotalPrice,
    setTotalItems,
    setTotalActualAmount,
    setTotalDiscountAmount,
  ]);

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
        <div className="summary__price">
          <span>TOTAL DISCOUNT: </span>
          <span>£ {totalDiscountPrice.toFixed(2)}</span>
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
