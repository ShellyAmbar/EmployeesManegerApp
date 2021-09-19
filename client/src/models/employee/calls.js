const axios = require('axios');

const getEmployeeCall = (employeeId, token) => {
  const url = 'http://192.168.1.45:3000/api/employee/getEmployee';

  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'bearer' + token,
  };

  return axios.get(
    url,
    {employeeId: employeeId},
    {
      headers: headers,
    },
  );
};

const getEmployeesCall = (userId, token) => {
  const url = 'http://192.168.1.45:3000/api/employee/getEmployees';

  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'bearer' + token,
  };

  return axios.get(
    url,
    {userId: userId},
    {
      headers: headers,
    },
  );
};

const updateEmployeeCall = (employeeId, employeeData, token) => {
  const url = 'http://192.168.1.45:3000/api/employee/updateEmployee';

  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'bearer' + token,
  };

  return axios.put(
    url,
    {...employeeData, employeeId},
    {
      headers: headers,
    },
  );
};

const setEmployeeCall = (employee, token) => {
  const url = 'http://192.168.1.45:3000/api/employee/setEmployee';

  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'bearer' + token,
  };

  return axios.post(url, employee, {
    headers: headers,
  });
};

const deleteEmployeeCall = (employeeId, token) => {
  const url = 'http://192.168.1.45:3000/api/employee/deleteEmployee';

  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'bearer' + token,
  };

  return axios.delete(
    url,
    {employeeId},
    {
      headers: headers,
    },
  );
};

export {
  getEmployeeCall,
  getEmployeesCall,
  updateEmployeeCall,
  setEmployeeCall,
  deleteEmployeeCall,
};
