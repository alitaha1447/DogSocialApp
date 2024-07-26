import React, {useRef} from 'react';
import {View, Text, StyleSheet, StatusBar, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import OTPTextInput from 'react-native-otp-textinput';

// components
import {Heading, FormInput, Button} from '../../../components/index.js';
import {
  horizontalScale as hs,
  verticalScale as vs,
  moderateScale as ms,
} from '../../../utils/responsiveMetrics';
import {COLORS} from '../../../constants/colors.js';
const VerificationCodeScreen = ({navigation}) => {
  const handleResetPassword = () => {
    navigation.navigate('ResetPassword');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <View style={styles.innerContainer}>
        <Heading
          main={'Enter Verification Code'}
          secondary={'Enter 5 Digit OTP Code'}
          size={26}
        />
        <View style={styles.otpContainer}>
          <OTPTextInput
            tintColor="gray"
            inputCount={5}
            containerStyle={styles.otpContainer}
            textInputStyle={styles.otpInput}
          />
        </View>
        <Text style={styles.otpTimer}>Timer - 00:36</Text>
        <View style={{marginTop: 60}}>
          <Button buttontext={'Verify'} onPress={handleResetPassword} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  innerContainer: {
    paddingHorizontal: 20,
    top: 25,
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  otpInput: {
    width: 52,
    height: 52,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    fontSize: 18,
  },
  otpTimer: {
    color: '#707070',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    marginTop: 20,
  },
});
export default VerificationCodeScreen;
