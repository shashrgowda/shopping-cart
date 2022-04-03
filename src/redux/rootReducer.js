import { combineReducers } from "redux";

import shoppingReducer from "./Shopping/reducers";

const rootReducer = combineReducers({
  shop: shoppingReducer,
});

export default rootReducer;
