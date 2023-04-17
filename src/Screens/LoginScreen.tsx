import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Colors } from '../Constants/Colors';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Tıkla Gelsin</Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    backgroundColor:Colors.red
  }
});
