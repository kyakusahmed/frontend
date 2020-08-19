import axios from "axios";
import { POST_ADVERT, POST_ADVERT_ERROR } from "../utilities/actionTypes";

const token = localStorage.getItem("token");

export const postAdvert = (data) => (dispatch) => {
  axios
    .post("http://localhost:3000/posts", data, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log(response);
      dispatch({
        type: POST_ADVERT,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: POST_ADVERT_ERROR,
        payload: error,
      });
    });
};
