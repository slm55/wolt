import axios from "axios";
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "../constants/actionTypes";

const API_URL =
  "https://659c067fd565feee2dac49a8.mockapi.io/shoplane/api/v1/banners";

const fetchBannersData = async (dispatch) => {
  try {
    dispatch({ type: FETCH_REQUEST });
    const response = await axios.get(API_URL);
    dispatch({ type: FETCH_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_FAILURE, payload: error.message });
  }
};

export default fetchBannersData;
