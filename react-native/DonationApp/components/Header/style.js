import {StyleSheet} from 'react-native';
import {scaleFontsSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title1: {
    fontFamily: 'Inter',
    fontSize: scaleFontsSize(24),
    lineHeight: scaleFontsSize(29),
    fontWeight: '600',
  },
  title2: {
    fontFamily: 'Inter',
    fontSize: scaleFontsSize(18),
    lineHeight: scaleFontsSize(22),
    fontWeight: '600',
  },
  title3: {
    fontFamily: 'Inter',
    fontSize: scaleFontsSize(16),
    lineHeight: scaleFontsSize(19),
    fontWeight: '600',
  },
});

export default style;
