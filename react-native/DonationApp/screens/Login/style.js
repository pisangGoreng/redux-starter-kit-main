import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  verticalScale,
  scaleFontsSize,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(24),
    flex: 1,
    justifyContent: 'center',
  },
  registrationButton: {
    alignItems: 'center',
  },
  error: {
    fontFamily: 'Inter',
    fontSize: scaleFontsSize(16),
    color: '#ff0000',
    marginBottom: verticalScale(24),
  },
  sucess: {
    fontFamily: 'Inter',
    fontSize: scaleFontsSize(16),
    color: '#28a745',
    marginBottom: verticalScale(24),
  },
});

export default style;
