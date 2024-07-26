import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export const Heading = ({main, secondary, size}) => {
  return (
    <>
      <Text style={[styles.mainHeading, {fontSize: size}]}>{main}</Text>
      <Text style={styles.secondaryHeading}>{secondary}</Text>
    </>
  );
};
const styles = StyleSheet.create({
  mainHeading: {
    color: 'black',

    fontFamily: 'Poppins-SemiBold',
  },
  secondaryHeading: {
    color: '#707070',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
});
