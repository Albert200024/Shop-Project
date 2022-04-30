import { applyMiddleware, combineReducers, createStore } from "redux";
import {handleCart, cart} from "./reducer/handleCart";
import { fetchReducer, fetchData, initialState } from "./reducer/fetchProducatAll";
import thunk from "redux-thunk";

const store = createStore(combineReducers({
    cart:handleCart,
    data:fetchReducer
}), {
    initiaCart:cart,
    initiafecth:initialState,
}, applyMiddleware(thunk))

store.dispatch(fetchData())

export default store