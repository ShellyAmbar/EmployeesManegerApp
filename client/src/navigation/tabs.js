import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {Home, Employees, EditEmployees, User} from '../screens';
import {COLORS, icons} from '../constants';
import TabBarCustomButton from '../customs/TabBarCustomButton';
import CustomTabBar from '../customs/CustomTabBar';
const Tab = createBottomTabNavigator();

export default function tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.lightGray3,
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
      tabBar={props => <CustomTabBar props={props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.home}
              resizeMethod="auto"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Employees"
        component={Employees}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.list}
              resizeMethod="auto"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="EditEmployees"
        component={EditEmployees}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.edit}
              resizeMethod="auto"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.user}
              resizeMethod="auto"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}
