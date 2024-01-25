import axios from "axios";

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_ERROR = "FETCH_ERROR";

export const addFav = (fact) => {
  return {
    type: ADD_FAV,
    payload: fact,
  };
};

export const removeFav = (fact) => {
  return {
    type: REMOVE_FAV,
    payload: fact,
  };
};

export const fetchFact = () => (dispatch) => {
  dispatch({ type: FETCH_LOADING });
  axios
    .get("https://catfact.ninja/fact")
    .then(function (response) {
      // handle success
      console.log(response);
      dispatch({ type: FETCH_SUCCESS, payload: response.data.fact });
    })
    .catch(function (error) {
      // handle error
      dispatch({ type: FETCH_ERROR, payload: error });
      console.log(error);
    });
};
