import React, { useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TX } from '../constants/texts';

export default function DetailsScreen({ navigation, route }) {
  useEffect(() => {
    console.log('route.params', route.params);
  }, []);
  return (
    <View style={styles.container}>
      <Text> {route.params.name} </Text>
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
