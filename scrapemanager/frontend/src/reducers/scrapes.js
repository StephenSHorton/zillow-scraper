import { GET_SCRAPES, DELETE_SCRAPE, ADD_SCRAPE } from "../actions/types.js";

const initialState = {
  scrapes: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SCRAPES:
      return {
        ...state,
        scrapes: action.payload,
      };
    case DELETE_SCRAPE:
      return {
        ...state,
        scrapes: state.scrapes.filter((scrape) => scrape.id !== action.payload),
      };
    case ADD_SCRAPE:
      return {
        ...state,
        scrapes: [...state.scrapes, action.payload],
      };
    default:
      return state;
  }
}
