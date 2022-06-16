import { SET_QUERY } from "../constants/search-constant";

export const setSearchQuery = (searchQuery) => {
  return {
    type: SET_QUERY,
    payload: searchQuery,
  };
};
