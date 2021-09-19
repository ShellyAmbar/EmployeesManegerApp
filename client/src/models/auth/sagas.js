import {put, takeEvery} from 'redux-saga/effects';
import {
  loginActionError,
  loginActionSuccess,
  signupActionError,
  signupActionSuccess,
} from './actionFunctions';
import {LOGIN_REQUEST, SIGNUP_REQUEST} from './types';

function* handlerlogin() {
  yield takeEvery(LOGIN_REQUEST, login);
}

function* handlersignup() {
  yield takeEvery(SIGNUP_REQUEST, signup);
}

function* login({username, password}) {
  try {
    let user = {};
    yield put(loginActionSuccess(user));
  } catch (error) {
    yield put(loginActionError(error));
  }
}

function* signup({username, password}) {
  try {
    let user = {};
    yield put(signupActionSuccess(user));
  } catch (error) {
    yield put(signupActionError(error));
  }
}

export {handlerlogin, handlersignup};
