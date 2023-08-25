import {StyleSheet} from 'react-native';
import {scaleFontsSize, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  label: {
    fontFamily: 'Inter',
    fontWeight: '400',
    color: '#36455A',
    fontSize: scaleFontsSize(12),
    lineHeight: scaleFontsSize(15),
  },
  input: {
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(167,167,167, 0.5)',
  },
});

export default style;
