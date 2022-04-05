import {
  ADD_TO_CART,
  ADJUST_ITEM_QTY,
  LOAD_CURRENT_ITEM,
  REMOVE_FROM_CART,
} from "./constants";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Face Mask",
      description: "Surgical facemask. Buy 6 for the price of 5!",
      price: 2.5,
      image: "https://m.media-amazon.com/images/I/71Nmp7kHIIS._SX522_.jpg",
      discountQty: 2,
    },
    {
      id: 2,
      title: "Toilet Paper",
      description: "Three-ply Toilet Paper. Buy 2 for £4!",
      price: 0.65,
      image: "https://m.media-amazon.com/images/I/71QeQD2r7mL._SX522_.jpg",
      discountQty: 6,
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      const item = state.products.find((product) => product.id === payload.id);
      const inCart = state.cart.find((item) =>
        item.id === payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      };
    case ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload.id ? { ...item, qty: +payload.qty } : item
        ),
      };
    case LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
