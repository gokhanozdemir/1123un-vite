import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

import reducer from "./reducer";

const store1123 = createStore(reducer, applyMiddleware(thunk, logger));

export default store1123;
