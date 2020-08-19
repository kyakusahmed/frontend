import axios from "axios";
//const user_token = localStorage.getItem("token");

export const registerUser = (data) => (dispatch) => {
  axios
    .post("http://localhost:3000/auth/signup", data, {
      headers: {
        "content-type": "application/json",
      },
    })
    .then((res) => {
      console.log(res);
      dispatch({
        type: "REGISTER_USER",
        payload: res,
      });
    })
    .catch((err) => {
      dispatch({
        type: "REGISTER_USER_ERROR",
        payload: err,
      });
    });
};

export const loginUser = (data) => (dispatch) => {
  axios
    .post("http://localhost:3000/auth/login", data, {
      headers: { "content-type": "application/json" },
    })

    .then((response) => {
      console.log(response.data);
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.user_token}`;
      dispatch({
        type: "LOGIN_USER",
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: "LOGIN_USER_ERROR",
        payload: error,
      });
    });
};
