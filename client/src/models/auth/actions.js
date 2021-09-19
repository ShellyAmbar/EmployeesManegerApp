import {
  loginActionError,
  loginActionSuccess,
  signupActionError,
  signupActionSuccess,
  logoutActionError,
  logoutActionSuccess,
} from './actionFunctions';
import {LOGIN_REQUEST, SIGNUP_REQUEST, LOGOUT_REQUEST} from './types';
import {loginUser, signupUser, logoutUser, refreshToken} from './calls';

const login = (username, password, callback) => {
  return dispatch => {
    try {
      let user = {
        username: username,
        password: password.toString(),
      };
      console.log(user);
      loginUser(user)
        .then(response => {
          console.log('response', response.data);
          if (response.status === 200 || response.status === 201) {
            dispatch(loginActionSuccess(response.data));
            callback();
          } else {
            throw 'Something went wrong';
          }
        })

        .catch(error => {
          throw 'Something went wrong';
        });
    } catch (error) {
      console.log(error);
      dispatch(loginActionError(error));
      callback();
    }
  };
};

const signup = (username, password, callback) => {
  return dispatch => {
    try {
      const user = {
        firstName: 'shany',
        lastName: 'bar',
        photoUrl: '',
        email: username,
        phone: '767869868768',
        password: password.toString(),
        organisation: 'Google',
      };

      signupUser(user)
        .then(response => {
          console.log('response', response.data);
          if (response.status === 200 || response.status === 201) {
            dispatch(signupActionSuccess(response.data));
            callback();
          } else {
            throw new Error('Something went wrong');
          }
        })

        .catch(error => {
          throw 'Something went wrong';
        });
    } catch (error) {
      console.log(error);
      dispatch(signupActionError(error));
      callback();
    }
  };
};

const logout = () => {
  try {
    let user = {};
    logoutActionSuccess(user);
  } catch (error) {
    logoutActionError(error);
  }
};

export {login, signup, logout};
