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
      description: "Surgical facemask.",
      price: 2.5,
      image: "https://m.media-amazon.com/images/I/71Nmp7kHIIS._SX522_.jpg",
    },
    {
      id: 2,
      title: "Toilet Paper",
      description: "Three-ply Toilet Paper",
      price: 0.65,
      image: "https://m.media-amazon.com/images/I/71QeQD2r7mL._SX522_.jpg",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return {};
    case REMOVE_FROM_CART:
      return {};
    case ADJUST_ITEM_QTY:
      return {};
    case LOAD_CURRENT_ITEM:
      return {};
    default:
      return state;
  }
};

export default shopReducer;
