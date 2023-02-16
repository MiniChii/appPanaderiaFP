import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from '../screens/DetailsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import ProductsScreen from '../screens/ProductsScreen';

import { COLORS } from '../constants/colors';
import { TX } from '../constants/texts';

const Stack = createNativeStackNavigator();
const ShopNavigator = () => (
  <Stack.Navigator
    initialRouteName="Categories"
    screenOptions={{
      // headerStyle: { backgroundColor: COLORS.primary },
      // headerTintColor: COLORS.secondary,
      headerShadowVisible: false,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <Stack.Screen
      name="Categories"
      component={CategoriesScreen}
      options={{
        title: TX.MY_BREAD,
      }}
    />
    <Stack.Screen
      name="Products"
      component={ProductsScreen}
      options={({ route }) => ({
        title: route.params.title,
      })}
    />
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={({ route }) => ({
        title: route.params.name,
      })}
    />
  </Stack.Navigator>
);

export default ShopNavigator;
