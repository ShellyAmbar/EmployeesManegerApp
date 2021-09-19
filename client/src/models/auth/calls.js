const axios = require('axios');
const signupUser = user => {
  const url = 'http://192.168.1.45:3000/api/auth/register';
  // const requestOptions = {
  //   method: 'POST',
  //   headers: {'Content-Type': 'application/json'},
  //   body: user,
  // };
  // console.log(requestOptions);

  return axios.post(url, user);
};

const loginUser = user => {
  const url = 'http://192.168.1.45:3000/api/auth/login';
  // const requestOptions = {
  //   method: 'POST',
  //   headers: {'Content-Type': 'application/json'},
  //   body: JSON.stringify({username: username, password: password.toString()}),
  // };

  return axios.post(url, user);
};

const logoutUser = (refreshToken, token) => {
  const url = 'https://192.168.1.45:3000/api/auth/logout';

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer' + token,
    },
    body: JSON.stringify({refreshToken: refreshToken, token: token}),
  };
  return fetch(url, requestOptions);
};

const refreshToken = ({refreshToken}) => {
  const url = 'https://192.168.1.45:3000/api/auth/refresh-token';
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({refreshToken: refreshToken}),
  };
  return fetch(url, requestOptions);
};

export {loginUser, signupUser, refreshToken, logoutUser};
