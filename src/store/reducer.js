import { FETCH, ADD_FAV, REMOVE_FAV } from "./actions";

const initial = {
  favs: [],
  current: "redux el sallıyor",
  error: null,
  loading: true,
};

export default function reducer(state = initial, action) {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
}
