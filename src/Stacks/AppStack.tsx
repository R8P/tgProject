import React from 'react';
import {AppStackParams} from '../Constants/types';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import CartScreen from '../Screens/CartScreen';
import HomeScreen from '../Screens/HomeScreen';

const App = createNativeStackNavigator<AppStackParams>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const AppStack = () => {
  return (
    <App.Navigator screenOptions={screenOptions} initialRouteName="HomeScreen">
      <App.Screen name="HomeScreen" component={HomeScreen} />
      <App.Screen name="CartScreen" component={CartScreen} />
    </App.Navigator>
  );
};

export default AppStack;
