import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from '../screens/DetailsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import ProductsScreen from '../screens/ProductsScreen';
import { Platform } from 'react-native';
import { COLORS } from '../constants/colors';
import { TX } from '../constants/texts';

const Stack = createNativeStackNavigator();
const ShopNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.select({ android: COLORS.primary }),
        },
        headerTintColor: Platform.select({
          android: 'white',
          ios: COLORS.primary,
        }),
        headerTitleStyle: 'bold',
      }}
    >
      <Stack.Screen
        name="Home"
        component={CategoriesScreen}
        options={{
          title: TX.MY_BREAD,
        }}
      ></Stack.Screen>
      <Stack.Screen name="Products" component={ProductsScreen}></Stack.Screen>
      <Stack.Screen name="Detail" component={DetailsScreen}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
);

export default ShopNavigator;
