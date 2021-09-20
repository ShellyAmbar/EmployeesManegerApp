import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import CustomModal from '../customs/CustomModal';
import CutomFlatList from '../customs/CutomFlatList';
import CutomFloatingButton from '../customs/CutomFloatingButton';
import {employeeCreators, authCreators} from '../models/root-actions';
const EditEmployees = () => {
  const employeesState = useSelector(state => state.employees);
  const authState = useSelector(state => state.auth);
  const [visivleModal, setVisivleModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [isAddNewEmployee, setisAddNewEmployee] = useState(false);
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
      updateEmployee(employee, authState.token, () => {
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

  const onAddEmployee = employee => {
    console.log(employee);
    getToken(authState.refreshToken, () => {
      addEmployee(employee, authState.token, () => {
        console.log('employee added');
        getEmployees(authState.user._id, authState.token, () => {
          console.log('getEmployesFinished');
        });
      });
    });
  };

  const handleClickAddEmployee = () => {
    //open popup, on callback add him;
    console.log('open');
    setisAddNewEmployee(true);
    openPopUpEmployee({});
  };

  const handleClickEditEmployee = employee => {
    //open popup, on callback add him;
    setisAddNewEmployee(false);
    openPopUpEmployee(employee);
  };

  const openPopUpEmployee = employee => {
    const organisation = authState.user.organisation;

    setModalData({...employee, organisation});
    setVisivleModal(true);
  };

  const onCloseModalPressed = () => {
    setVisivleModal(false);
  };

  const onDoneModalPressed = employee => {
    setVisivleModal(false);
    if (isAddNewEmployee) {
      onAddEmployee(employee);
    } else {
      onEditEmployee(employee);
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <CustomModal
        visible={visivleModal}
        employee={modalData}
        onClosePressed={onCloseModalPressed}
        onDonePressed={onDoneModalPressed}
      />

      {employeesState.employees && (
        <CutomFlatList
          data={employeesState.employees}
          edit={handleClickEditEmployee}
          delete={onDeleteEmployee}
        />
      )}
      <CutomFloatingButton onClickButton1={handleClickAddEmployee} />
    </View>
  );
};
export default EditEmployees;

const styles = StyleSheet.create({});
