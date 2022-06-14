const defaultState = {
  searchQuery: "",
  searchHistory: [],
};

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "set_query":
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
