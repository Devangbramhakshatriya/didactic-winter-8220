import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as product} from "./Redux/ProductRedux/reducer"

export const store = legacy_createStore(product, applyMiddleware(thunk));
