// Vendor
import { Dimensions, PixelRatio } from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

export const width = size => `${((size * 100) / 1080) * (SCREEN_WIDTH * 0.01)}px`;

export const height = (size, option) => {
  let value = ((size * 100) / 1920) * (SCREEN_HEIGHT * 0.01);
  if (option === 'round') {
    value = Math.round(value);
  }
  return `${value}px`;
};

export const widthPercentageToDP = (widthPercent) => {
  const screenWidth = Dimensions.get('window').width;
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  return `${PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100)}px`;
};

export const heightPercentageToDP = (heightPercent) => {
  const screenHeight = Dimensions.get('window').height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
  return `${PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100)}px`;
};
