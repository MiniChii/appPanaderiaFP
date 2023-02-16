import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import ShopNavigator from './ShopNavigator';
import CartNavigator from './CartNavigator';
import { TX } from '../constants/texts';
import OrderNavigator from './OrderNavigator';

const BottomTabs = createBottomTabNavigator();
const renderIcon = (icono, label) => (
  <View style={styles.icon}>
    <Ionicons name={icono} size={20} color="black" />
    <Text>{label}</Text>
  </View>
);

export default BottomTabNavigator = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTabs.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarIcon: () => renderIcon('home', TX.SHOP),
        }}
      />
      <BottomTabs.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarIcon: () => renderIcon('cart', TX.CART),
        }}
      />
      <BottomTabs.Screen
        name="OrderTab"
        component={OrderNavigator}
        options={{
          tabBarIcon: () => renderIcon('list', TX.ORDERS),
        }}
      />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
