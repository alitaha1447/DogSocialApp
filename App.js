import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';
import AppStackNavigator from './src/navigation/AppStackNavigator';
import {Provider, useSelector} from 'react-redux';
import {store} from './src/data/redux/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <AppContent />
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
};

const AppContent = () => {
  const isLogIn = useSelector(state => state.userData.isLogIn);
  console.log(isLogIn); // Check if this correctly logs the state

  return (
    <Stack.Navigator>
      {isLogIn ? (
        <Stack.Screen
          name="AppStackNavigator"
          component={AppStackNavigator}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <Stack.Screen
          name="AuthStackNavigator"
          component={AuthStackNavigator}
          options={{
            headerShown: false,
          }}
        />
      )}
    </Stack.Navigator>
  );
};

export default App;
