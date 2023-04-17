import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/Stacks/AppStack';
import LoginStack from './src/Stacks/LoginStack';

type Props = {};

const Main = (props: Props) => {
  return (
    <NavigationContainer>
      <LoginStack />
    </NavigationContainer>
  );
};

export default Main;

const styles = StyleSheet.create({});
