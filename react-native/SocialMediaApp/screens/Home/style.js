import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontsSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  header: {
    paddingTop: verticalScale(30),
    paddingRight: horizontalScale(17),
    paddingLeft: horizontalScale(24),
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    backgroundColor: '#F9FAFB',
    padding: horizontalScale(12),
    borderRadius: horizontalScale(100),
  },
  messageNumberContainer: {
    width: horizontalScale(11),
    height: verticalScale(10),
    backgroundColor: '#F35BAC',
    borderRadius: horizontalScale(11),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: horizontalScale(7),
    top: verticalScale(8),
  },
  messageNumber: {
    fontSize: scaleFontsSize(6),
    fontFamily: 'Inter',
    lineHeight: scaleFontsSize(7),
    fontWeight: '600',
    color: '#fff',
  },
  userStoryContainer: {
    paddingHorizontal: horizontalScale(26),
    marginTop: verticalScale(12),
    height: 100,
  },
  userPostContainer: {
    marginTop: verticalScale(30),
    flex: 1,
    paddingHorizontal: horizontalScale(22),
  },
});

export default style;
