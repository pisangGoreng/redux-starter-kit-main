import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontsSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  name: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: scaleFontsSize(16),
    lineHeight: scaleFontsSize(19),
  },
  location: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: scaleFontsSize(12),
    lineHeight: scaleFontsSize(15),
    paddingTop: verticalScale(5),
    color: '#79869F',
  },
  userInformation: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPostInformation: {
    marginLeft: horizontalScale(10),
  },
  userInformationContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userPostContainer: {
    borderBottomWidth: 1,
    borderColor: '#EFF2F6',
  },
  userPostStatText: {
    color: '#79869F',
  },
  post: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: verticalScale(16),
  },
  userPostStats: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(30),
    paddingHorizontal: horizontalScale(10),
  },
  userPostStatButton: {
    marginRight: horizontalScale(27),
    flexDirection: 'row',
  },
  userPostStatIcon: {
    marginRight: horizontalScale(3),
    color: '#79869F',
  },
});

export default style;
