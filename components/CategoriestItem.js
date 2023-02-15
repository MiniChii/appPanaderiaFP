import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const CategoriestItem = ({ item, onSelected }) => {
  return (
    <View style={styles.categoriesItem}>
      <TouchableOpacity style={styles.container}>
        <View style={styles.textContainer}>
          <Text>{item.title}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.img }} style={styles.image}></Image>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoriestItem;

const styles = StyleSheet.create({
  categoriesItem: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },
  textContainer: {
    width: '60%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '40%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
