import { combineReducers, createStore } from "redux";
import searchReducer from "./reducers/search-reducer";

const reducers = combineReducers({
  search: searchReducer,
});

const store = createStore(reducers);

export default store;
