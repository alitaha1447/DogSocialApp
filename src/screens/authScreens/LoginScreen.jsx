import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar, Pressable} from 'react-native';
import {Button, FormInput, Heading} from '../../components/index.js';
import FaceBook from '../../assets/icons/socialMedia/facebook.svg';
import Apple from '../../assets/icons/socialMedia/apple.svg';
import Google from '../../assets/icons/socialMedia/google.svg';
import {useDispatch} from 'react-redux';
import {logIn} from '../../data/redux/reducer/userData';
import {horizontalScale as hs} from '../../utils/responsiveMetrics';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleLogin = () => {
    dispatch(logIn());
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <View style={styles.innerContainer}>
        <View style={styles.topSection}>
          <Heading
            main={'Welcome Back'}
            secondary={'Please Enter your Details'}
            size={30}
          />
          <View style={{marginTop: 20}}>
            <FormInput
              txtName={'Enter your Email'}
              value={email}
              onChangeText={setEmail}
            />
            <FormInput
              txtName={'Password'}
              value={password}
              onChangeText={setPassword}
            />
            <Pressable
              style={styles.forgetPasswordContainer}
              onPress={handleForgotPassword}>
              <Text style={styles.forgetPasswordText}>Forget Password</Text>
              <View style={styles.forgetPasswordLine} />
            </Pressable>
            <Button buttontext={'Log In'} onPress={handleLogin} />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 40,
              }}>
              <View style={{flex: 1, height: 1, backgroundColor: '#707070'}} />

              <Text
                style={{
                  color: '#707070',
                  width: hs(30),
                  textAlign: 'center',
                }}>
                or
              </Text>

              <View style={{flex: 1, height: 1, backgroundColor: '#707070'}} />
            </View>
            <View style={styles.socialIconsContainer}>
              <Google />
              <Apple />
              <FaceBook />
            </View>
          </View>
        </View>
        <View style={styles.bottomSection}>
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don’t have an account?</Text>
            <Pressable onPress={() => navigation.navigate('SignUpScreen')}>
              <Text style={styles.signUpLink}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  topSection: {
    paddingTop: 64,
  },
  bottomSection: {
    paddingBottom: 50,
  },
  forgetPasswordContainer: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  forgetPasswordText: {
    color: '#707070',
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
  },
  forgetPasswordLine: {
    width: hs(85),
    height: 1,
    backgroundColor: '#707070',
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#707070',
    marginVertical: 40,
  },
  socialIconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 20,
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 2,
  },
  signUpText: {
    color: '#707070',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  signUpLink: {
    color: '#020000',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default LoginScreen;
