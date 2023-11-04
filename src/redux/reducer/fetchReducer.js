import {
  FETCH_FAILURE,
  FETCH_START,
  FETCH_SUCCESS,
} from "../actions/actionTypes";
const initialState = {
  loader: false,
  data: [],
  error: null,
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, loader: true };
    case FETCH_SUCCESS:
      return { ...state, loader: false, data: action.payload, error: null };
    case FETCH_FAILURE:
      return { ...state, loader: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
export default fetchReducer;
