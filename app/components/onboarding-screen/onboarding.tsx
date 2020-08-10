import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

type SlideData = {
  key: string;
  image: object;
  title: string;
  text: string;
};

interface Props {
  data: SlideData;
}

const OnboardingComponent = (props: Props) => {
  const {data} = props;

  return (
    <View style={styles.container}>
      <Image source={data.image} style={styles.image} />
      <Text style={styles.text}>{data.title}</Text>
      <Text style={styles.text}>{data.text}</Text>
    </View>
  );
};

export default OnboardingComponent;
