import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BreadDetailsScreen from '../screens/BreadDetailsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryBreadScreen from '../screens/CategoryBreadScreen';

const Stack = createNativeStackNavigator();
const ShopNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={CategoriesScreen}></Stack.Screen>
      <Stack.Screen name="Bread" component={CategoryBreadScreen}></Stack.Screen>
      <Stack.Screen name="Detail" component={BreadDetailsScreen}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
);

export default ShopNavigator;
