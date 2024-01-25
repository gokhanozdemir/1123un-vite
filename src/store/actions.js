import axios from "axios";
import { toast } from "react-toastify";

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_ERROR = "FETCH_ERROR";

export const addFav = (fact) => {
  toast.info("Favori eklendi");
  return {
    type: ADD_FAV,
    payload: fact,
  };
};

export const removeFav = (fact) => {
  toast.warn("Favori çıkarıldı");

  return {
    type: REMOVE_FAV,
    payload: fact,
  };
};

export const fetchFact = () => (dispatch) => {
  const loadingToast = toast.loading("Please wait...", {
    autoClose: 2000,
    closeOnClick: true,
  });

  dispatch({ type: FETCH_LOADING });
  axios
    .get("https://catfact.ninja/fact")
    .then(function (response) {
      // handle success
      console.log(response);
      dispatch({ type: FETCH_SUCCESS, payload: response.data.fact });
      toast.update(loadingToast, {
        render: "Success! Cat Fact hehe!",
        type: "success",
        autoClose: 2000,
        isLoading: false,
        closeOnClick: true,
      });
    })
    .catch(function (error) {
      // handle error
      dispatch({ type: FETCH_ERROR, payload: error });
      toast.update(loadingToast, {
        render: "Error! Cat Fact api down!",
        type: "error",
        isLoading: false,
        autoClose: 4000,
        closeOnClick: true,
      });
      console.log(error);
    });
};
