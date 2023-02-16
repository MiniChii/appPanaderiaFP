import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CartItem from '../components/CartItem';
import { CART } from '../data/cart';

const CartScreen = () => {
  const total = 120;

  const handleConfirmCartItem = () => {
    console.log('Confirmanding...');
  };
  const handleDeleteCartItem = () => {
    console.log('Borranding...');
  };

  const renderCartItem = ({ item }) => (
    <CartItem item={item} onDelete={handleDeleteCartItem}></CartItem>
  );
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={CART}
          keyExtractor={(item) => item.id}
          renderItem={renderCartItem}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.confirm}
          onPress={handleConfirmCartItem}
        >
          <Text>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  total: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    padding: 8,
  },
});
