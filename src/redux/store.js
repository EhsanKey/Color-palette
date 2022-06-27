import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReduser from "./rootReduser";
import logger from "redux-logger";

const store = createStore(rootReduser, composeWithDevTools(applyMiddleware()))

export default store;