import {put, takeEvery} from 'redux-saga/effects';
import {
  getEmployeeActionError,
  getEmployeeActionSuccess,
  getEmployeesActionError,
  getEmployeesActionSuccess,
  addEmployeeActionError,
  addEmployeeActionSuccess,
  removeEmployeeActionError,
  removeEmployeeActionSuccess,
  updateEmployeeActionError,
  updateEmployeeActionSuccess,
} from './actionFunctions';
import {
  GET_EMPLOYEE_REQUEST,
  ADD_EMPLOYEE_REQUEST,
  REMOVE_EMPLOYEE_REQUEST,
  UPDATE_EMPLOYEE_REQUEST,
  GET_EMPLOYEES_REQUEST,
} from './types';

function* handlerGetEmployee() {
  yield takeEvery(GET_EMPLOYEE_REQUEST, getEmployee);
}
function* handlerGetEmployees() {
  yield takeEvery(GET_EMPLOYEES_REQUEST, getEmployees);
}

function* handlerAddEmployee() {
  yield takeEvery(ADD_EMPLOYEE_REQUEST, addEmployee);
}
function* handlerRemoveEmployee() {
  yield takeEvery(REMOVE_EMPLOYEE_REQUEST, removeEmployee);
}

function* handlerUpdateEmployee() {
  yield takeEvery(UPDATE_EMPLOYEE_REQUEST, updateEmployee);
}

function* getEmployees() {
  try {
    //TODO get favorites from firestore database
    const list = [];

    yield put(getEmployeesActionSuccess(list));
  } catch (error) {
    yield put(getEmployeesActionError(error));
  }
}
function* getEmployee() {
  try {
    //TODO get favorites from firestore database
    const item = {};

    yield put(getEmployeeActionSuccess(item));
  } catch (error) {
    yield put(getEmployeeActionError(error));
  }
}
function* addEmployee(emplyee) {
  try {
    yield put(addEmployeeActionSuccess(emplyee));
  } catch (error) {
    yield put(addEmployeeActionError(error));
  }
}

function* removeEmployee(emplyee) {
  try {
    yield put(removeEmployeeActionSuccess(emplyee));
  } catch (error) {
    yield put(removeEmployeeActionError(error));
  }
}

function* updateEmployee(emplyee) {
  try {
    yield put(updateEmployeeActionSuccess(emplyee));
  } catch (error) {
    yield put(updateEmployeeActionError(error));
  }
}

export {
  handlerGetEmployee,
  handlerGetEmployees,
  handlerAddEmployee,
  handlerRemoveEmployee,
  handlerUpdateEmployee,
};
