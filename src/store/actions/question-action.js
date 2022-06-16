import axios from "axios";
import { GET_QUESTIONS } from "../constants/questions-contant";

export const getQuestions = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:4000/questions");
    dispatch({
      type: GET_QUESTIONS,
      payload: data,
    });
  } catch {
    dispatch({
      type: GET_QUESTIONS,
      payload: [],
    });
  }
};
