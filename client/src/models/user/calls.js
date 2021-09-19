const updateUser = ({userId, token}) => {
  const url = 'http://localhost:3000/api/user/updateUser';

  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer' + token,
    },
    body: JSON.stringify({userId: userId}),
  };
  return fetch(url, requestOptions);
};

const deleteUser = ({userId, token}) => {
  const url = 'http://localhost:3000/api/user/deleteUser';

  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer' + token,
    },
    body: JSON.stringify({userId: userId}),
  };
  return fetch(url, requestOptions);
};
export {updateUser, deleteUser};
