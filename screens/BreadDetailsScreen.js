import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

export default function BreadDetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text> Detalle del producto </Text>
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
