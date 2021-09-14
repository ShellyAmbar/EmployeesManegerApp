import {reducer as employeesReducer} from './employees/reducer';

import {combineReducers} from 'redux';

const reducer = combineReducers({
  employees: employeesReducer,
});

export {reducer};
