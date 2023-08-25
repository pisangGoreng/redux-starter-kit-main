import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontsSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  profileImageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(32),
  },
  profileImageContent: {
    borderWidth: 1,
    borderColor: '#0150EC',
    borderRadius: horizontalScale(120),
    padding: horizontalScale(4),
  },
  profileImage: {
    width: horizontalScale(120),
    height: horizontalScale(120),
  },
  userNameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(20),
  },
  userName: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: scaleFontsSize(20),
    lineHeight: scaleFontsSize(24),
    color: '#022150',
  },
  profileStatsContainer: {
    marginHorizontal: horizontalScale(24),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',

    marginTop: verticalScale(16),
  },
  singleStatContainer: {
    paddingHorizontal: horizontalScale(18),
    paddingVertical: verticalScale(10),
    alignItems: 'center',
  },
  singleStatBorder: {
    borderRightWidth: 1,
    borderColor: '#e9eff1',
  },
  singleStatNumber: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: scaleFontsSize(20),
    lineHeight: scaleFontsSize(24),
    color: '#022150',
  },
  singleStatText: {
    marginTop: verticalScale(6),
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: scaleFontsSize(16),
    lineHeight: scaleFontsSize(19),
    color: '#79869F',
  },
  border: {
    borderTopWidth: 1,
    borderColor: '#EFF2F6',
    marginTop: verticalScale(16),
    marginHorizontal: horizontalScale(28),
  },
});

export default style;
