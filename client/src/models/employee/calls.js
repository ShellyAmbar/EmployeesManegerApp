const getEmployee = ({employeeId, token}) => {
  const url = 'http://localhost:3000/api/employee/getEmployee';

  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer' + token,
    },
    body: JSON.stringify({employeeId: employeeId}),
  };
  return fetch(url, requestOptions);
};

const getEmployees = ({userId, token}) => {
  const url = 'http://localhost:3000/api/employee/getEmployees';
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer' + token,
    },
    body: JSON.stringify({userId: userId}),
  };
  return fetch(url, requestOptions);
};

const updateEmployee = ({employeeId, token}) => {
  const url = 'http://localhost:3000/api/employee/updateEmployee';

  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer' + token,
    },
    body: JSON.stringify({employeeId: employeeId}),
  };
  return fetch(url, requestOptions);
};

const setEmployee = ({employee, token}) => {
  const url = 'http://localhost:3000/api/employee/setEmployee';

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer' + token,
    },
    body: JSON.stringify({employee: employee}),
  };
  return fetch(url, requestOptions);
};

const deleteEmployee = ({employeeId, token}) => {
  const url = 'http://localhost:3000/api/employee/deleteEmployee';

  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer' + token,
    },
    body: JSON.stringify({employeeId: employeeId}),
  };
  return fetch(url, requestOptions);
};
