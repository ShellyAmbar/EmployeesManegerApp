import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import CustomItem from '../customs/CustomItem';
import CustomModalEmployee from '../customs/CustomModalEmployee';
import CutomFlatList from '../customs/CutomFlatList';
import {employeeCreators, authCreators} from '../models/root-actions';
const Employees = () => {
  const width = Dimensions.get('window').width - 20;
  const columns = 2;
  const employeesState = useSelector(state => state.employees);
  const authState = useSelector(state => state.auth);
  const [visivleModal, setVisivleModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const dispatch = useDispatch();
  const {getEmployees} = bindActionCreators(employeeCreators, dispatch);
  const {getToken} = bindActionCreators(authCreators, dispatch);

  useEffect(() => {
    getToken(authState.refreshToken, () => {
      getEmployees(authState.user._id, authState.token, () => {
        console.log('getEmployesFinished');
      });
    });
  }, []);

  const onCloseModalPressed = () => {
    setVisivleModal(false);
  };

  const onClickEnployee = employee => {
    setModalData(employee);
    setVisivleModal(true);
  };

  const rederItems =
    () =>
    ({item, index}) => {
      return (
        <CustomItem
          heightOfItem={width / columns}
          item={item}
          onClickItem={onClickEnployee}
        />
      );
    };
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <CustomModalEmployee
        visible={visivleModal}
        item={modalData}
        onClosePressed={onCloseModalPressed}
      />
      {employeesState.employees && (
        <CutomFlatList
          data={employeesState.employees}
          rederItem={rederItems()}
          numColumns={2}
          keyExtractor={item => item._id}
        />
      )}
    </View>
  );
};
export default Employees;

const styles = StyleSheet.create({});
