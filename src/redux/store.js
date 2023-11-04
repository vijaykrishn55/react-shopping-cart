import { createStore,combineReducers } from "redux";
import fetchReducer from "./reducer/fetchReducer";
import cartReducer from "./reducer/cartReducer";

// const store = createStore(fetchReducer);
const rootReducer=combineReducers({
    fetch:fetchReducer,
    cart:cartReducer
}
)
const store=createStore(rootReducer);

export default store;
