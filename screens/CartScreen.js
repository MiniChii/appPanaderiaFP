import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CartItem from '../components/CartItem';

const CartScreen = () => {
  return (
    <View>
      <Text>CartScreen</Text>
      <CartItem />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
