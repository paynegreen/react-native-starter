import React, {FunctionComponent as Component} from 'react';
import {View, Text} from 'react-native';
import {TEXT} from './style';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useStores} from '../../models';

export const LoginScreen: Component = function WelcomeScreen() {
  const navigation = useNavigation();
  const {userStore} = useStores();

  const login = () => {
    userStore.toggleAuthenticated(true);
  };

  return (
    <View>
      {/* <TouchableOpacity style={{padding: 10, borderWidth: 1}} onPress={login}> */}
      <Text style={[TEXT]} onPress={login}>
        Login Screen
      </Text>
      {/* </TouchableOpacity> */}
    </View>
  );
};
