import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontsSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  profileTabPostsContainer: {
    flex: 1,
    paddingTop: verticalScale(10),
    backgroundColor: '#fff',
  },
  imageContainer: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(21),
    justifyContent: 'space-between',
  },
  image: {
    maxWidth: horizontalScale(150),
    maxHeight: verticalScale(90),
  },
  imageUpcomingRowsContainer: {
    marginTop: verticalScale(11),
  },
  lastImageContainer: {
    marginBottom: verticalScale(50),
  },
});

export default style;
