import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "../constants/actionTypes";

const url =
  "https://659c067fd565feee2dac49a8.mockapi.io/shoplane/api/v1/banners";

export const initialState = {
  loading: null,
  data: null,
  error: null,
};

export const bannerReducer = (state, action) => {
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