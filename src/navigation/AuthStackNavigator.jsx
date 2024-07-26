import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingScreen1 from '../screens/onBoardingScreens/OnBoardingScreen1';
import OnBoardingScreen2 from '../screens/onBoardingScreens/OnBoardingScreen2';
import OnBoardingScreen3 from '../screens/onBoardingScreens/OnBoardingScreen3';
import LoginScreen from '../screens/authScreens/LoginScreen';
import ForgotPasswordScreen from '../screens/authScreens/forgotPassword/ForgotPasswordScreen';
import VerificationCodeScreen from '../screens/authScreens/forgotPassword/VerificationCodeScreen';
import ResetPasswordScreen from '../screens/authScreens/forgotPassword/ResetPasswordScreen';
import SignUpScreen from '../screens/authScreens/SignUpScreen';
import DogSignUpScreen from '../screens/authScreens/DogSignUpScreen';
import SwiperScreen from '../screens/onBoardingScreens/SwiperScreen';
import {NAVIGATOR_NAMES} from '../constants/index.js';
const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen
        name={NAVIGATOR_NAMES.OnBoardingScreen1}
        component={OnBoardingScreen1}
        options={{
          animation: 'slide_from_right',
        }}
      />
      <AuthStack.Screen
        name={NAVIGATOR_NAMES.OnBoardingScreen2}
        component={OnBoardingScreen2}
        options={{
          animation: 'slide_from_right',
        }}
      />
      <AuthStack.Screen
        name={NAVIGATOR_NAMES.OnBoardingScreen3}
        component={OnBoardingScreen3}
        options={{
          animation: 'slide_from_right',
        }}
      />
      {/* <AuthStack.Screen
        name="SwiperScreen"
        component={SwiperScreen}
        options={{
          headerShown: false,
        }}
      /> */}
      <AuthStack.Screen
        name={NAVIGATOR_NAMES.LoginScreen}
        component={LoginScreen}
      />
      <AuthStack.Screen
        name={NAVIGATOR_NAMES.ForgotPassword}
        component={ForgotPasswordScreen}
      />
      <AuthStack.Screen
        name={NAVIGATOR_NAMES.VerificationCode}
        component={VerificationCodeScreen}
      />
      <AuthStack.Screen
        name={NAVIGATOR_NAMES.ResetPassword}
        component={ResetPasswordScreen}
      />
      <AuthStack.Screen
        name={NAVIGATOR_NAMES.SignUpScreen}
        component={SignUpScreen}
      />
      <AuthStack.Screen
        name={NAVIGATOR_NAMES.DogSignUpScreen}
        component={DogSignUpScreen}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
