import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomStackNavigator from './BottomStackNavigator';
import NotificationScreen from '../screens/appScreens/home/NotificationScreen';
import CreatePost from '../screens/appScreens/home/CreatePost';

const AppStack = createNativeStackNavigator();

const AppStackNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen
        name="BottomStackNavigator"
        component={BottomStackNavigator}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerShown: false,
          // headerTitleAlign: 'center',
          // headerStyle: {backgroundColor: '#red'},
          // headerTintColor: '#212121', // Change this color if you want the text to be different
          // headerTitleStyle: {color: '#212121'}, // Ensure the title color is set correctly
        }}
      />
      <AppStack.Screen name="CreatePost" component={CreatePost} />
    </AppStack.Navigator>
  );
};

export default AppStackNavigator;
