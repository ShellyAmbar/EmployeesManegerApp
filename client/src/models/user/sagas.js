import {put, takeEvery} from 'redux-saga/effects';
import {
  removeUserActionError,
  removeUserActionSuccess,
  updateUserActionError,
  updateUserActionSuccess,
} from './actionFunctions';
import {REMOVE_USER_REQUEST, UPDATE_USER_REQUEST} from './types';

function* handlerRemoveUser() {
  yield takeEvery(REMOVE_USER_REQUEST, removeUser);
}

function* handlerUpdateUser() {
  yield takeEvery(UPDATE_USER_REQUEST, updateUser);
}

function* removeUser(emplyee) {
  try {
    yield put(removeUserActionSuccess(emplyee));
  } catch (error) {
    yield put(removeUserActionError(error));
  }
}

function* updateUser(emplyee) {
  try {
    yield put(updateUserActionSuccess(emplyee));
  } catch (error) {
    yield put(updateUserActionError(error));
  }
}

export {handlerRemoveUser, handlerUpdateUser};
