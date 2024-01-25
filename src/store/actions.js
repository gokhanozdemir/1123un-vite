import axios from "axios";

export const FETCH = "FETCH";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

export const addFav = (fact) => {
  return {
    type: ADD_FAV,
    payload: fact,
  };
};

export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};

export const fetchFact = () => (dispatch) => {
  axios
    .get("https://catfact.ninja/fact")
    .then(function (response) {
      // handle success
      console.log(response);
      dispatch({ type: FETCH, payload: response.data.fact });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
};
