import { StyleSheet, FlatList, View } from 'react-native';
import React from 'react';

import { PRODUCTS } from '../data/products';
import ProductsItem from '../components/ProductItem';

const ProductsScreen = ({ navigation, route }) => {
  const newProducts = PRODUCTS.filter(
    (product) => product.category === route.params.categoryId
  );

  const handleSelectedProduct = (item) => {
    navigation.navigate('Details', {
      name: item.name,
    });
  };

  const renderProductItem = ({ item }) => (
    <ProductsItem item={item} onSelected={handleSelectedProduct} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={newProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({});
