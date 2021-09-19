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

const getEmployees = () => {
  try {
    //TODO get favorites from firestore database
    const list = [];

    getEmployeesActionSuccess(list);
  } catch (error) {
    getEmployeesActionError(error);
  }
};
const getEmployee = () => {
  try {
    //TODO get favorites from firestore database
    const item = {};

    getEmployeeActionSuccess(item);
  } catch (error) {
    getEmployeeActionError(error);
  }
};
const addEmployee = emplyee => {
  try {
    addEmployeeActionSuccess(emplyee);
  } catch (error) {
    addEmployeeActionError(error);
  }
};

const removeEmployee = emplyee => {
  try {
    removeEmployeeActionSuccess(emplyee);
  } catch (error) {
    removeEmployeeActionError(error);
  }
};

const updateEmployee = emplyee => {
  try {
    updateEmployeeActionSuccess(emplyee);
  } catch (error) {
    updateEmployeeActionError(error);
  }
};

export {getEmployee, getEmployees, addEmployee, updateEmployee, removeEmployee};
