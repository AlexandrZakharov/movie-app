import { applyMiddleware, combineReducers, createStore } from "redux";
import home from "./reducers/home";

const reducers = combineReducers({
  home,
});

const store = createStore(reducers);
window.store = store;

export default store;
