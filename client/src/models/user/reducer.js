import {
  REMOVE_USER_REQUEST_FAILURE,
  REMOVE_USER_REQUEST_SUCCESS,
  UPDATE_USER_REQUEST_FAILURE,
  UPDATE_USER_REQUEST_SUCCESS,
} from './types';
const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_USER_REQUEST_SUCCESS: {
      const userItem = action.payload.payload;
      try {
        console.log('state.users', state.users);
        let filteredList = state.users.filter(item => {
          console.log('item', item);
          if (item) {
            return userItem.id !== item.id;
          } else return false;
        });

        state.users = filteredList;
      } catch (err) {
        console.log('err', err);
      }

      return {...state, users: [...state.users]};
    }

    case REMOVE_USER_REQUEST_FAILURE: {
      const {err} = action.err;
      return state;
    }

    case UPDATE_USER_REQUEST_SUCCESS: {
      const userItem = action.payload.payload;
      try {
        console.log('state.users', state.users);
        let filteredList = state.users.filter(item => {
          console.log('item', item);
          if (item) {
            return userItem.id !== item.id;
          } else return false;
        });

        state.users = filteredList;
      } catch (err) {
        console.log('err', err);
      }

      return {...state, users: [...state.users]};
    }

    case UPDATE_USER_REQUEST_FAILURE: {
      const {err} = action.err;
      return state;
    }

    default:
      return state;
  }
};

export {reducer};
