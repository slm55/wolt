import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from "../constants/actionTypes";

export const initialState = {
  loading: null,
  data: null,
  error: null,
};

export const productsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case FETCH_FAILURE:
      return { ...state, loading: false, data: null, error: action.payload };
    default:
      return state;
  }
};
