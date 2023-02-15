import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ProductsItem from '../components/ProductItem';
import { TX } from '../constants/texts';
import { PRODUCTS } from '../data/products';

export default function ProductsScreen({ navigation, route }) {
  const handleSelectedProduct = (item) => {
    //console.log(item);
    navigation.navigate('Details', {
      name: item.name,
    });
  };

  const renderProductItem = ({ item }) => (
    <ProductsItem product={item} onSelected={handleSelectedProduct} />
  );
  return (
    <FlatList
      data={PRODUCTS}
      renderItem={renderProductItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productsContainer: {
    height: 150,
    width: 150,
  },
});
