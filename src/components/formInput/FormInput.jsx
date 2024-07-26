import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

export const FormInput = ({txtName}) => {
  return (
    <View>
      <Text style={{color: 'black'}}>{txtName}</Text>
      <TextInput
        placeholder={txtName}
        placeholderTextColor="#010101"
        style={styles.textInput}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#FCFCFC',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 10,
    color: '#010101',
  },
});
