import {
  ADD_EMPLOYEE_REQUEST_FAILURE,
  ADD_EMPLOYEE_REQUEST_SUCCESS,
  GET_EMPLOYEE_REQUEST_FAILURE,
  GET_EMPLOYEE_REQUEST_SUCCESS,
  REMOVE_EMPLOYEE_REQUEST_FAILURE,
  REMOVE_EMPLOYEE_REQUEST_SUCCESS,
  UPDATE_EMPLOYEE_REQUEST_FAILURE,
  UPDATE_EMPLOYEE_REQUEST_SUCCESS,
} from './types';
//GET
const getEmployeeActionSuccess = news => {
  console.log('favoritesAction', news);
  return {
    type: GET_EMPLOYEE_REQUEST_SUCCESS,
    payload: news,
  };
};
const getEmployeeActionError = error => {
  return {
    type: GET_EMPLOYEE_REQUEST_FAILURE,
    err: error,
    payload: error,
  };
};
//SET

const addEmployeeActionSuccess = obj => {
  return {
    type: ADD_EMPLOYEE_REQUEST_SUCCESS,
    payload: obj,
  };
};
const addEmployeeActionError = error => {
  return {
    type: ADD_EMPLOYEE_REQUEST_FAILURE,
    err: error,
    payload: error,
  };
};

//DELETE

const removeEmployeeActionSuccess = payload => {
  return {
    type: REMOVE_EMPLOYEE_REQUEST_SUCCESS,
    payload: payload,
  };
};
const removeEmployeeActionError = error => {
  return {
    type: REMOVE_EMPLOYEE_REQUEST_FAILURE,
    err: error,
    payload: error,
  };
};

// Update
const updateEmployeeActionSuccess = payload => {
  return {
    type: UPDATE_EMPLOYEE_REQUEST_SUCCESS,
    payload: payload,
  };
};
const updateEmployeeActionError = error => {
  return {
    type: UPDATE_EMPLOYEE_REQUEST_FAILURE,
    err: error,
    payload: error,
  };
};

export {
  getEmployeeActionError,
  getEmployeeActionSuccess,
  addEmployeeActionError,
  addEmployeeActionSuccess,
  removeEmployeeActionError,
  removeEmployeeActionSuccess,
  updateEmployeeActionError,
  updateEmployeeActionSuccess,
};
