import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const CategoriestItem = ({ item, onSelected }) => {
  return (
    <View style={styles.categoriesItem}>
      <TouchableOpacity style={styles.container}>
        <View style={styles.textContainer}>
          <Text>{item.title}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={item.img}></Image>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoriestItem;

const styles = StyleSheet.create({});
