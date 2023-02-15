import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TX } from '../constants/texts';

export default function BreadDetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text> {TX.PRODUCT_DETAILS} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
