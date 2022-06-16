import { SET_QUERY } from "../constants/search-constant";

const defaultState = {
  searchQuery: "",
  searchHistory: [],
};

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_QUERY:
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
