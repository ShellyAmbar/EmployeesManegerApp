import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, SignUp} from '../screens';
import Tabs from '../navigation/tabs';
const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Login'}>
      {/* <Stack.Screen name="Tabs" component={Tabs} /> */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
