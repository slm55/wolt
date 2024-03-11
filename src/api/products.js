import axios from "axios";
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "../constants/actionTypes";

const API_URL =
"https://fakestoreapi.com/products";

const fetchProducts = async (dispatch) => {
  try {
    dispatch({ type: FETCH_REQUEST });
    const response = await axios.get(API_URL);
    dispatch({ type: FETCH_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_FAILURE, payload: error.message });
  }
};

export default fetchProducts;

// get post put delete