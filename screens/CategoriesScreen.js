import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import CategoriestItem from '../components/CategoriestItem';
import { TX } from '../constants/texts';

export default function CategoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.categoriesContainer}>
        <CategoriestItem
          item={{
            title: 'titulo de la imagen',
            img: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
      <Text> Categorias </Text>
      <Button
        title={TX.GO_TO_PRODUCTS}
        onPress={() => navigation.navigate('Products')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  categoriesContainer: {
    padding: 15,
    height: 150,
  },
});
