import {StyleSheet} from 'react-native';

import Layout from '../../utils/layout';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 40,
    color: '#fff',
    textAlign: 'center',
  },
  image: {
    width: Layout.window.width / 2,
    height: Layout.window.height / 3,
  },
});

export default styles;
