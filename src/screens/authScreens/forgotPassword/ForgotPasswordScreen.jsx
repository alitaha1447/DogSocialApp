import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Heading, FormInput, Button} from '../../../components/index.js';

// const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;
// console.log(statusBarHeight);
const ForgotPasswordScreen = ({navigation}) => {
  const handleForgotPassword = () => {
    navigation.navigate('VerificationCode');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <Heading
            main={'Forget your Password'}
            secondary={'We have send OTP to your Email'}
            size={26}
          />
        </View>
        <View style={styles.formInputContainer}>
          <FormInput txtName={'Enter your Email'} />
          <View style={{marginTop: 60}}>
            <Button buttontext={'Send OTP'} onPress={handleForgotPassword} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 20,
    top: 25,
  },
  formInputContainer: {
    marginTop: 20,
  },
});
export default ForgotPasswordScreen;
