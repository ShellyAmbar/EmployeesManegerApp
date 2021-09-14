import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Employee} from '../screens';
import Tabs from '../navigation/tabs';
const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Tabs'}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Employee" component={Employee} />
    </Stack.Navigator>
  );
}
