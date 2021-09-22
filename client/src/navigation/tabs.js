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
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
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
            <AntDesignIcon
              name="home"
              size={18}
              style={{
                color: focused ? COLORS.primary : COLORS.secondary,
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
            <Feather
              name="list"
              size={18}
              style={{
                color: focused ? COLORS.primary : COLORS.secondary,
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
            <AntDesignIcon
              name="edit"
              size={18}
              style={{
                color: focused ? COLORS.primary : COLORS.secondary,
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
            <AntDesignIcon
              name="user"
              size={18}
              style={{
                color: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}
