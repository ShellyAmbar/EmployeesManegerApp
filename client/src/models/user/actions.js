import {
  removeUserActionError,
  removeUserActionSuccess,
  updateUserActionError,
  updateUserActionSuccess,
} from './actionFunctions';
import {REMOVE_USER_REQUEST, UPDATE_USER_REQUEST} from './types';

const removeUser = emplyee => {
  try {
    removeUserActionSuccess(emplyee);
  } catch (error) {
    removeUserActionError(error);
  }
};

const updateUser = emplyee => {
  try {
    updateUserActionSuccess(emplyee);
  } catch (error) {
    updateUserActionError(error);
  }
};

export {removeUser, updateUser};
