import { GET_QUESTIONS } from "../constants/questions-contant";

const defaultState = {
  questions: [],
};

const questionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return { ...state, questions: action.payload };
    default:
      return state;
  }
};

export default questionReducer;
