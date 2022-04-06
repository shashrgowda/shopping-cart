import React, { useState } from "react";
import "./CartItem.css";
import { connect } from "react-redux";
import { adjustItemQty, removeFromCart } from "../../../redux/Shopping/actions";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <div className="cartItem">
      <img className="cartItem__image" src={item.image} alt={item.title} />
      <div className="cartItem__details">
        <p className="styles.details__title">{item.title}</p>
        <p className="details__desc">{item.description}</p>
        <p className="details__price">£{item.price.toFixed(2)}</p>
      </div>
      <div className="cartItem__actions">
        <div className="cartItem__qty">
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          className="actions__deleteItemBtn"
        >
          <img
            src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1649101913~hmac=28b2c345beb916bcf1003a71e7703443"
            alt="Bin Icon"
          />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
