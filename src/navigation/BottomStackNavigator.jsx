import React from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/appScreens/home/HomeScreen';
import {NAVIGATOR_NAMES} from '../constants';
import {
  verticalScale as vs,
  horizontalScale as hs,
} from '../utils/responsiveMetrics';

const BottomTab = createBottomTabNavigator();

const BottomStackNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#FFFFFF', height: vs(70)}, // Global tabBarStyle
      }}>
      <BottomTab.Screen
        name={NAVIGATOR_NAMES.HomeScreen}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={require('../assets/icons/bottomBarIcon/home.png')} />
          ),
        }}
      />
      {/* <BottomTab.Screen
        name={NAVIGATOR_NAMES.HomeScreen}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/bottomBarIcon/connect.png')}
            />
          ),
        }}
      /> */}
      {/* <BottomTab.Screen
        name={NAVIGATOR_NAMES.HomeScreen}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={require('../assets/icons/bottomBarIcon/chat.png')} />
          ),
        }}
      /> */}
    </BottomTab.Navigator>
  );
};

export default BottomStackNavigator;
