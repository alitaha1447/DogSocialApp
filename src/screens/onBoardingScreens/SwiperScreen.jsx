import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';

import OnBoardingScreen1 from './OnBoardingScreen1';
import OnBoardingScreen2 from './OnBoardingScreen2';
import OnBoardingScreen3 from './OnBoardingScreen3';

const SwiperScreen = ({navigation}) => {
  return (
    <Swiper loop={false} showsButtons={true}>
      <View style={styles.slide}>
        <OnBoardingScreen1 navigation={navigation} />
      </View>
      <View style={styles.slide}>
        <OnBoardingScreen2 navigation={navigation} />
      </View>
      <View style={styles.slide}>
        <OnBoardingScreen3 navigation={navigation} />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },
});

export default SwiperScreen;
