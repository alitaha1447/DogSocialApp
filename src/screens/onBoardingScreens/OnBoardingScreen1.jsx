import React from 'react';
import {View, Image, StatusBar, StyleSheet, Dimensions} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  horizontalScale as hs,
  verticalScale as vs,
  moderateScale as ms,
} from '../../utils/responsiveMetrics';
import {COLORS} from '../../constants/colors';
import Image1 from '../../assets/images/onboardingImages/onBoarding1.svg';
import {Button, DotIndicator, OnBoardingText} from '../../components/index.js';

const {width: w, height: h} = Dimensions.get('window');

const OnBoardingScreen1 = ({navigation}) => {
  const handleNavigation = () => {
    navigation.navigate('OnBoardingScreen2');
  };

  const onSwipeLeft = () => {
    handleNavigation();
  };

  return (
    <PanGestureHandler
      onGestureEvent={({nativeEvent}) => {
        if (nativeEvent.translationX < -50) {
          onSwipeLeft();
        }
      }}>
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor="transparent"
          barStyle={'dark-content'}
        />
        <View>
          <Image
            source={require('../../assets/images/onboardingImages/onBoardingImage1.png')}
            style={{
              width: w,
              height: h * 0.65,
              resizeMode: 'cover',
            }}
          />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.box}>
            <OnBoardingText
              heading={'Welcome!'}
              text={'We’re happy to have you join our dog parents’ community'}
            />
            <DotIndicator currentScreen={1} />

            <Button
              buttontext={'Next'}
              onPress={handleNavigation}
              width={'100%'}
            />
          </View>
        </View>
      </View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.backgroundColor, // Adjust as needed
  },

  bottomContainer: {
    height: '40%',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  box: {
    backgroundColor: '#F5FBFB',
    height: '100%',
    paddingHorizontal: 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default OnBoardingScreen1;
