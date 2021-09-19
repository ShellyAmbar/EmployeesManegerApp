import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import CutomFlatList from '../customs/CutomFlatList';
import CutomFloatingButton from '../customs/CutomFloatingButton';
import {employeeCreators, authCreators} from '../models/root-actions';
const EditEmployees = () => {
  const employeesState = useSelector(state => state.employees);
  const authState = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const {
    getEmployees,
    updateEmployee,
    removeEmployee,
    getEmployee,
    addEmployee,
  } = bindActionCreators(employeeCreators, dispatch);
  const {getToken} = bindActionCreators(authCreators, dispatch);

  useEffect(() => {
    getToken(authState.refreshToken, () => {
      getEmployees(authState.user._id, authState.token, () => {
        console.log('getEmployesFinished');
      });
    });
  }, []);

  const onEditEmployee = employee => {
    getToken(authState.refreshToken, () => {
      updateEmployee(employee._id, employee, authState.token, () => {
        console.log('employee edited');
      });
    });
  };
  const onDeleteEmployee = employee => {
    getToken(authState.refreshToken, () => {
      removeEmployee(employee._id, authState.token, () => {
        console.log('employee removed');
      });
    });
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <CutomFloatingButton />
      {employeesState.employees && (
        <CutomFlatList
          data={employeesState.employees}
          edit={onEditEmployee}
          delete={onDeleteEmployee}
        />
      )}
    </View>
  );
};
export default EditEmployees;

const styles = StyleSheet.create({});
