import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COLORS } from '../constants/colors';
import { TX } from '../constants/texts';
import CartScreen from '../screens/CartScreen';

const Stack = createNativeStackNavigator();
const CartNavigator = () => (
  <Stack.Navigator
    initialRouteName="Categories"
    screenOptions={{
      headerShadowVisible: false,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <Stack.Screen
      name="Cart"
      component={CartScreen}
      options={{
        title: TX.CART,
      }}
    />
  </Stack.Navigator>
);

export default CartNavigator;
