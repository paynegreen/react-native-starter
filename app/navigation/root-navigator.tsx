import React from 'react';
import 'react-native-gesture-handler';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {observer} from 'mobx-react-lite';
import {PrimaryNavigator} from './primary-navigator';
import {AuthNavigator} from './auth-navigator';
import {useStores} from '../models';

export type RootParamList = {
  primaryStack: undefined;
  authStack: undefined;
};

const Stack = createNativeStackNavigator<RootParamList>();

const RootStack = observer(() => {
  const {userStore} = useStores();

  if (!userStore.isAuthenticated) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}>
        <Stack.Screen
          name="authStack"
          component={AuthNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen
        name="primaryStack"
        component={PrimaryNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
});

export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <RootStack />
    </NavigationContainer>
  );
});

RootNavigator.displayName = 'RootNavigator';
