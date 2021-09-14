import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {reducer} from './root-reducer';
import {rootSagas} from './root-saga';

//import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

//persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
const sagaMiddleware = createSagaMiddleware();

let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSagas);
let persistor = persistStore(store);
export {store, persistor};
