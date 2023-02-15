import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import CategoriestItem from '../components/CategoriestItem';
import { CATEGORIES } from '../data/categories';

export default function CategoriesScreen({ navigation }) {
  const handleSelectedCategory = (item) => {
    console.log(item);
    navigation.navigate('Products', {
      categoryId: item.id,
      title: item.title,
    });
  };

  const renderCategoriesItem = ({ item }) => (
    <View style={styles.categoriesContainer}>
      <CategoriestItem
        item={item}
        onSelected={() => handleSelectedCategory(item)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoriesItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesContainer: {
    padding: 15,
    height: 150,
  },
});
