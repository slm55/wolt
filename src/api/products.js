import axios from "axios";
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "../constants/actionTypes";

const API_URL =
"https://fakestoreapi.com/products";

const fetchProducts = async (dispatch, category=null) => {
  try {
    dispatch({ type: FETCH_REQUEST });
    const reqURL = API_URL + (category ? `/category/${encodeURIComponent(category)}` : ``)
    const response = await axios.get(reqURL);
    dispatch({ type: FETCH_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_FAILURE, payload: error.message });
  }
};

export const fetchProduct = async (dispatch, id) => {
  try {
    dispatch({ type: FETCH_REQUEST });
    const reqURL = API_URL +  `/${id}`;
    const response = await axios.get(reqURL);
    dispatch({ type: FETCH_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_FAILURE, payload: error.message });
  }
};

export default fetchProducts;

// get post put delete