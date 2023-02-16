import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TX } from '../constants/texts';

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.header}>{item.name}</Text>
      </View>
      <View style={styles.containerDetail}>
        <Text>
          {TX.QUANTITY}: {item.quantity}
        </Text>
        <Text>
          {TX.PRICE}: {item.price}
        </Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Ionicons name="trash" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  header: {
    fontSize: 18,
  },
  detail: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
