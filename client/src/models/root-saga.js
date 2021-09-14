import {all, spawn} from 'redux-saga/effects';

import {
  handlerGetEmployee,
  handlerGetEmployees,
  handlerAddEmployee,
  handlerRemoveEmployee,
  handlerUpdateEmployee,
} from './employees/sagas';

function* rootSagas() {
  yield all([
    handlerGetEmployee(),
    handlerGetEmployees(),
    handlerAddEmployee(),
    handlerRemoveEmployee(),
    handlerUpdateEmployee(),
  ]);
}

export {rootSagas};
