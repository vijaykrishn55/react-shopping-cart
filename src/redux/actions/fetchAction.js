import { FETCH_SUCCESS, FETCH_START, FETCH_FAILURE } from "./actionTypes";

export const fetchStart = () => {
  return {
    type: FETCH_START,
  };
};

export const fetchSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    payload: data,
  };
};

export const fetchFailure = (error) => {
  return {
    type: FETCH_FAILURE,
    payload: error,
  };
};
