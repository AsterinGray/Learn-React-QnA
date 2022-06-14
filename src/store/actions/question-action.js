export const setSearchQuery = (searchQuery) => {
  return {
    type: "set_query",
    payload: searchQuery,
  };
};
