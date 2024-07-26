import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const DotIndicator = ({currentScreen}) => {
  return (
    <View style={styles.dotContainer}>
      <View style={[styles.dot, currentScreen === 1 && styles.activeDot]} />
      <View style={[styles.dot, currentScreen === 2 && styles.activeDot]} />
      <View style={[styles.dot, currentScreen === 3 && styles.activeDot]} />
    </View>
  );
};
const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000000',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#B3E0DB',
  },
});
