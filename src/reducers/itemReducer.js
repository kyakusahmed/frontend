import { POST_ADVERT_ERROR, POST_ADVERT } from "../utilities/actionTypes";

const initialState = {
  post: {},
  error: [],
};

export const itemReducer = (state = initialState, action) => {
  if (action.type === POST_ADVERT) {
    return Object.assign({}, state, {
      post: action.payload,
    });
  } else if (action.type === POST_ADVERT_ERROR) {
    return Object.assign({}, state, {
      error: action.payload,
    });
  }
  return state;
};

export default itemReducer;
