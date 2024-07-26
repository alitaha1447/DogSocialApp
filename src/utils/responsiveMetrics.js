import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
console.log(width);
console.log(height);

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 692;

const horizontalScale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export {horizontalScale, verticalScale, moderateScale};
