import {
  ADD_EMPLOYEE_REQUEST_FAILURE,
  ADD_EMPLOYEE_REQUEST_SUCCESS,
  GET_EMPLOYEE_REQUEST_FAILURE,
  GET_EMPLOYEE_REQUEST_SUCCESS,
  REMOVE_EMPLOYEE_REQUEST_FAILURE,
  REMOVE_EMPLOYEE_REQUEST_SUCCESS,
  UPDATE_EMPLOYEE_REQUEST_FAILURE,
  UPDATE_EMPLOYEE_REQUEST_SUCCESS,
  GET_EMPLOYEES_REQUEST_FAILURE,
  GET_EMPLOYEES_REQUEST_SUCCESS,
} from './types';
const initialState = {
  employees: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEE_REQUEST_SUCCESS: {
      const employees = action.payload;

      if (employees && employees.length > 0) {
        state.employees = employees;
      }
      return {...state, employees: [...state.employees]};
    }
    case GET_EMPLOYEE_REQUEST_FAILURE: {
      const {err} = action.err;
      return err;
    }
    case GET_EMPLOYEES_REQUEST_SUCCESS: {
      const employees = action.payload;

      if (employees && employees.length > 0) {
        state.employees = employees;
      }
      return {...state, employees: [...state.employees]};
    }
    case GET_EMPLOYEES_REQUEST_FAILURE: {
      const {err} = action.err;
      return err;
    }
    case ADD_EMPLOYEE_REQUEST_SUCCESS: {
      const employeesItem = action.payload.payload;
      return {
        ...state,
        employees: [...state.employees, employeesItem],
      };
    }

    case ADD_EMPLOYEE_REQUEST_FAILURE: {
      const {err} = action.err;
      return err;
    }

    case REMOVE_EMPLOYEE_REQUEST_SUCCESS: {
      const employeesItem = action.payload.payload;
      try {
        console.log('state.employees', state.employees);
        let filteredList = state.employees.filter(item => {
          console.log('item', item);
          if (item) {
            return employeesItem.id !== item.id;
          } else return false;
        });

        state.employees = filteredList;
      } catch (err) {
        console.log('err', err);
      }

      return {...state, employees: [...state.employees]};
    }

    case REMOVE_EMPLOYEE_REQUEST_FAILURE: {
      const {err} = action.err;
      return state;
    }

    case UPDATE_EMPLOYEE_REQUEST_SUCCESS: {
      const employeesItem = action.payload.payload;
      try {
        console.log('state.employees', state.employees);
        let filteredList = state.employees.filter(item => {
          console.log('item', item);
          if (item) {
            return employeesItem.id !== item.id;
          } else return false;
        });

        state.employees = filteredList;
      } catch (err) {
        console.log('err', err);
      }

      return {...state, employees: [...state.employees]};
    }

    case UPDATE_EMPLOYEE_REQUEST_FAILURE: {
      const {err} = action.err;
      return state;
    }

    default:
      console.log('error');
      return state;
  }
};

export {reducer};
