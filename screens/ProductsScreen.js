import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { TX } from '../constants/texts';
export default function ProductsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text> Productos de la categoría </Text>
      <Button
        title={TX.GO_TO_DETAILS}
        onPress={() => navigation.navigate('Detail')}
      />
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
