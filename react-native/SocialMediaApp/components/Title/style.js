import {StyleSheet} from 'react-native';
import {scaleFontsSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: scaleFontsSize(24),
    lineHeight: scaleFontsSize(29),
  },
});

export default style;
