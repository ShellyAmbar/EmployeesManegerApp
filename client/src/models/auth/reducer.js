import {
  LOGIN_REQUEST_FAILURE,
  LOGIN_REQUEST_SUCCESS,
  LOGOUT_REQUEST_FAILURE,
  LOGOUT_REQUEST_SUCCESS,
  SIGNUP_REQUEST_FAILURE,
  SIGNUP_REQUEST_SUCCESS,
} from './types';
const initialState = {
  user: {},
  err: '',
  message: '',
  token: '',
  refreshToken: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST_SUCCESS: {
      const message = action.payload.message;
      const user = action.payload.userObj;
      const err = '';
      const token = action.payload.token;
      const refreshToken = action.payload.refreshToken;
      console.log('LOGIN_REQUEST_SUCCESS');
      return {message, user, err, token, refreshToken};
    }

    case LOGIN_REQUEST_FAILURE: {
      const err = action.err;
      return {...state, err};
    }

    case SIGNUP_REQUEST_SUCCESS: {
      const message = action.payload.message;
      const user = action.payload.userObj;
      const err = '';
      const token = action.payload.token;
      const refreshToken = action.payload.refreshToken;

      return {message, user, err, token, refreshToken};
    }

    case SIGNUP_REQUEST_FAILURE: {
      const err = action.err;
      return {...state, err};
    }

    case LOGOUT_REQUEST_SUCCESS: {
      const message = action.payload.message;

      return {...state, message};
    }

    case LOGOUT_REQUEST_FAILURE: {
      const err = action.err;
      return {...state, err};
    }

    default:
      return state;
  }
};

export {reducer};
