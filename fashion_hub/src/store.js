import { applyMiddleware, legacy_createStore,combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as product} from "./Redux/ProductRedux/reducer"
import {reducer as homeReducer} from "./Redux/HomeProduct/reducer"

const rootReducer=combineReducers({product,homeReducer})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));