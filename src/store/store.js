import { createStore } from "redux";
import rooReducer from "./reducer";

const store = createStore(rooReducer)

export default store