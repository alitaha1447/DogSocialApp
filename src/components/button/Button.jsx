import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export const Button = ({buttontext, width, txtColor, onPress}) => {
  return (
    <TouchableOpacity style={[styles.button, {width: width}]} onPress={onPress}>
      <Text style={[styles.btnText, {color: txtColor}]}>{buttontext}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#71C2BC',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
  },
  btnText: {
    color: '#020000',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },
});
