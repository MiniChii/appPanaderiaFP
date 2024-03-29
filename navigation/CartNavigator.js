import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
