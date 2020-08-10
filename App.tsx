/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import './app/utils/ignore-warnings';
import 'mobx-react-lite/batchingForReactNative';
import React, {Component, useRef, useState, useEffect} from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import {
  SafeAreaProvider,
  initialWindowSafeAreaInsets,
} from 'react-native-safe-area-context';
import {
  useBackButtonHandler,
  RootNavigator,
  canExit,
  setRootNavigation,
  useNavigationPersistence,
} from './app/navigation';
import * as storage from './app/utils/storage';
import {RootStore, RootStoreProvider, setupRootStore} from './app/models';
import OnboardingScreen from './app/screens/onboarding-screen/onboarding-screen';
import {observer} from 'mobx-react-lite';

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

import {enableScreens} from 'react-native-screens';
enableScreens();

/**
 * This is the root component of our app.
 */
const App: Component<{}> = observer(() => {
  const [onboard, setOnboard] = useState(false);
  const navigationRef = useRef<NavigationContainerRef>();
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined);

  setRootNavigation(navigationRef);
  useBackButtonHandler(navigationRef, canExit);
  const {
    initialNavigationState,
    onNavigationStateChange,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);

  // Kick off initial async loading actions, like loading fonts and RootStore
  useEffect(() => {
    (async () => {
      setupRootStore().then(setRootStore);
    })();
  }, []);

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color. You can replace
  // with your own loading component if you wish.
  if (!rootStore) {
    return null;
  }

  //Onboard check. If the user hasn't onboarded yet this screens will be
  //shown to the user when the store is ready

  if (!rootStore.userStore.onboarded) {
    return <OnboardingScreen store={rootStore.userStore} />;
  }

  return (
    <RootStoreProvider value={rootStore}>
      <SafeAreaProvider initialSafeAreaInsets={initialWindowSafeAreaInsets}>
        <RootNavigator
          ref={navigationRef}
          initialState={initialNavigationState}
          onStateChange={onNavigationStateChange}
        />
      </SafeAreaProvider>
    </RootStoreProvider>
  );
});

export default App;
