import React, {FunctionComponent as Component} from 'react';
import {View, Text} from 'react-native';
import {TEXT} from './style';
import {useStores} from '../../models';

export const WelcomeScreen: Component = function WelcomeScreen() {
  const {userStore} = useStores();

  const logout = () => {
    userStore.toggleAuthenticated(false);
  };

  return (
    <View>
      <Text style={[TEXT, {marginTop: 40}]} onPress={logout}>
        Hello
      </Text>
    </View>
  );
};
