import {
  FETCH_SUCCESS,
  ADD_FAV,
  REMOVE_FAV,
  FETCH_ERROR,
  FETCH_LOADING,
} from "./actions";

const initial = {
  favs: [],
  current: "redux el sallıyor",
  error: null,
  loading: true,
};

export default function reducer(state = initial, action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        current: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        current: null,
      };
    case FETCH_LOADING:
      return {
        ...state,
        loading: true,
        current: null,
      };

    case ADD_FAV:
      const newAddedState = {
        ...state,
        favs: [action.payload, ...state.favs],
      };
      return newAddedState;

    case REMOVE_FAV:
      const newRemovedState = {
        ...state,
        favs: state.favs.filter((f) => f !== action.payload),
      };

      return newRemovedState;

    default:
      return state;
  }
}
