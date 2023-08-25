const {Dimensions} = require('react-native');
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

// < 375px == small
// * tidak semua perlu pakai scalling method ini
// * jadi di cek manual, cocok apa engk dengan design nya
// * untuk size yg hitung vertical / horizontal (margin, padding) pakai horizontalScale() aja, karena width lebih konsisten dibanding height
// * untuk satuan font (fontSize, fontHeight, dll) bisa pakai scaleFontsSize()

const isSmall = width <= 375 && !DeviceInfo.hasNotch();
const guidelineBaseWidth = () => {
  if (isSmall) {
    return 330;
  }

  return 350;
};

const guidelineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }

  return 680;
};

const guidelineBaseFonts = () => {
  if (width > 410) {
    return 430;
  }

  return 400;
};

const horizontalScale = size => (width / guidelineBaseWidth()) * size;
const verticalScale = size => (height / guidelineBaseHeight()) * size;
const scaleFontsSize = size =>
  Math.round((size * width) / guidelineBaseFonts());

export {horizontalScale, verticalScale, scaleFontsSize};
