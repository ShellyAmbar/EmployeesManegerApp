import {
  LOGIN_REQUEST_FAILURE,
  LOGIN_REQUEST_SUCCESS,
  SIGNUP_REQUEST_FAILURE,
  SIGNUP_REQUEST_SUCCESS,
  LOGOUT_REQUEST_FAILURE,
  LOGOUT_REQUEST_SUCCESS,
} from './types';

const loginActionSuccess = data => {
  return {
    type: LOGIN_REQUEST_SUCCESS,
    payload: data,
  };
};
const loginActionError = error => {
  return {
    type: LOGIN_REQUEST_FAILURE,
    err: error,
  };
};

const signupActionSuccess = data => {
  return {
    type: SIGNUP_REQUEST_SUCCESS,
    payload: data,
  };
};
const signupActionError = error => {
  return {
    type: SIGNUP_REQUEST_FAILURE,
    err: error,
  };
};

const logoutActionSuccess = user => {
  return {
    type: LOGOUT_REQUEST_SUCCESS,
    payload: user,
  };
};
const logoutActionError = error => {
  return {
    type: LOGOUT_REQUEST_FAILURE,
    err: error,
  };
};

export {
  loginActionError,
  loginActionSuccess,
  signupActionError,
  signupActionSuccess,
  logoutActionError,
  logoutActionSuccess,
};