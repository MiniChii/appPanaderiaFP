import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

export default function CategoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text> Categorias </Text>
      <Button
        title="Ir a Productos"
        onPress={() => navigation.navigate('Bread')}
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
