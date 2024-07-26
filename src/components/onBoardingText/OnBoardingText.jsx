import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import {moderateScale as ms} from '../../utils/responsiveMetrics';

export const OnBoardingText = ({heading, text}) => {
  return (
    <React.Fragment>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.text}>{text}</Text>
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  heading: {
    color: '#010101',
    fontSize: ms(22),
    fontFamily: 'Poppins-SemiBold',
  },
  text: {
    color: '#707070',
    fontSize: ms(14),
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
});
