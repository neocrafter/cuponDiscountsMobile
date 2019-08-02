import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import CouponScreen from '../screens/coupon/coupon';
import RecipeScreen from '../screens/recipe/recipe';
import ProfileScreen from '../screens/profile/profile';

const CouponStack = createStackNavigator({
  Home: CouponScreen,
});

CouponStack.navigationOptions = {
  tabBarLabel: 'Coupon',
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
  tabBarLabel: 'Recipe',
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
  tabBarLabel: 'Profile',
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
  RecipeStack
});
