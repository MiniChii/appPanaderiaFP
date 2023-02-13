import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
export default function BreadDetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text> Productos de la categoría </Text>
      <Button
        title="Ir al detalle"
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
