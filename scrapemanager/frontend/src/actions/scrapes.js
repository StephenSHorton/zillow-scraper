import axios from "axios";

import { GET_SCRAPES, DELETE_SCRAPE, ADD_SCRAPE } from "./types";

// GET SCRAPES
export const getScrapes = () => (dispatch) => {
  axios
    .get("/api/scrapes/")
    .then((res) => {
      dispatch({
        type: GET_SCRAPES,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// DELETE SCRAPE
export const deleteScrape = (id) => (dispatch) => {
  axios
    .delete(`/api/scrapes/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_SCRAPE,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// GET SCRAPES
export const addScrape = (scrape) => (dispatch) => {
  axios
    .post("/api/scrapes/", scrape)
    .then((res) => {
      dispatch({
        type: ADD_SCRAPE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err.response.data));
};
