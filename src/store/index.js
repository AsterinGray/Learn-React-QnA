import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import searchReducer from "./reducers/search-reducer";
import questionReducer from "./reducers/question-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  search: searchReducer,
  question: questionReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
