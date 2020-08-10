import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './styles';
import OnboardingComponent from '../../components/onboarding-screen/onboarding';
import {UserStore} from '../../models';
import {Instance} from 'mobx-state-tree';

interface Props {
  store: Instance<typeof UserStore>;
}

const OnboardingScreen = (props: Props) => {
  const {store} = props;

  const slides = [
    {
      key: '1',
      image: require('./onboarding.png'),
      title: 'Title 1',
      text: 'Some text to be displayed on screen 1',
    },
    {
      key: '2',
      image: require('./onboarding.png'),
      title: 'Title 2',
      text: 'Some text to be displayed on screen 2',
    },
    {
      key: '3',
      image: require('./onboarding.png'),
      title: 'Title 3',
      text: 'Some text to be displayed on screen 3',
    },
  ];

  const _renderItem = ({item}) => {
    return <OnboardingComponent data={item} />;
  };

  const _onDone = async () => {
    try {
      store.onboard(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={slides}
      onDone={_onDone}
      showSkipButton
      showPrevButton
      style={styles}
    />
  );
};

export default OnboardingScreen;
