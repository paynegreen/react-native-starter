import React from 'react';

import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {LoginScreen} from '../screens';

export type AuthParamList = {
  login: undefined;
};

const Stack = createNativeStackNavigator<AuthParamList>();

export function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
