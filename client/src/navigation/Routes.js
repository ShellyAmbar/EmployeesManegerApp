import {View, Text} from 'react-native';
import AuthStack from './AuthStack';
import {MainStack} from './MainStack';
import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';

const Routes = () => {
  const [authenticate, setAuthenticate] = useState(false);
  const [initializing, setInitializing] = useState(true);

  const [user, setUser] = useState(null);

  function onAuthStateChanged(user) {
    if (user) {
      setUser(user);
      if (initializing) setInitializing(false);
      setAuthenticate(true);
    } else {
      setInitializing(true);
      setUser(null);
      setAuthenticate(false);
    }
  }

  useEffect(() => {
    // const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //  return subscriber();
  }, []);
  //if (initializing) return null;

  return (
    <NavigationContainer>
      {console.log('user', user)}
      {user ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
