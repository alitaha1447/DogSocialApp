import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
// import CustomText from '../../../components/customText/CustomText';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  verticalScale as vs,
  horizontalScale as hs,
  moderateScale as ms,
} from '../../../utils/responsiveMetrics';
import {Heading, Button, FormInput} from '../../../components/index.js';
const ResetPasswordScreen = () => {
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
            main={'Reset Password'}
            secondary={'Make sure the password is Match on Both Feild'}
            size={26}
          />
        </View>
        <View style={styles.formInputContainer}>
          <FormInput txtName={'New Password'} />
          <FormInput txtName={'Confirm Password'} />
          <View style={{marginTop: 60}}>
            <Button buttontext={'Verify'} />
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
    paddingHorizontal: hs(20),
    top: vs(25),
  },
  formInputContainer: {
    marginTop: 20,
  },
});
export default ResetPasswordScreen;
