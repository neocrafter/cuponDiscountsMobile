import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import CouponScreen from '../screens/mycoupons/coupon';
import RecipeScreen from '../screens/recipe/recipe';
import ProfileScreen from '../screens/profile/profile';
import ConfigurationScreen from '../screens/profile/profile';


const CouponStack = createStackNavigator({
  Home: CouponScreen,
});

CouponStack.navigationOptions = {
  tabBarLabel: 'Cupones',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};


const RecipeStack = createStackNavigator({
  Links: RecipeScreen,
});

RecipeStack.navigationOptions = {
  tabBarLabel: 'Receta',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Settings: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const ConfigurationStack = createStackNavigator({
  Settings: ConfigurationScreen,
});

ConfigurationStack.navigationOptions = {
  tabBarLabel: 'Configuracion',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  ProfileStack,
  CouponStack,
  RecipeStack,
  ConfigurationStack
});
