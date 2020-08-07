import React, {FunctionComponent as Component} from 'react';
import {View, Text} from 'react-native';
import {TEXT} from './style';

export const LoginScreen: Component = function WelcomeScreen() {
  return (
    <View>
      <Text style={[TEXT, {marginTop: 40}]}>Login Screen</Text>
    </View>
  );
};
