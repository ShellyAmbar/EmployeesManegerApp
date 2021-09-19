import {View, Text} from 'react-native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import auth from '@react-native-firebase/auth';
import {useSelector} from 'react-redux';

const Routes = () => {
  const authState = useSelector(state => state.auth);
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (
      Object.keys(authState).length !== 0 &&
      Object.keys(authState.user).length !== 0
    ) {
      setUser(false);
    }
  }, []);

  return (
    <NavigationContainer>
      {user ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
