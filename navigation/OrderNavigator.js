import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TX } from '../constants/texts';

import OrderScreen from '../screens/OrderScreen';

const Stack = createNativeStackNavigator();

export default OrderNavigator = () => (
  <Stack.Navigator
    initialRouteName="Orders"
    screenOptions={{
      headerShadowVisible: false,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <Stack.Screen
      name="Orders"
      component={OrderScreen}
      options={{
        title: TX.ORDERS,
      }}
    />
  </Stack.Navigator>
);
