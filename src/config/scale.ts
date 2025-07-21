// utils/scale.ts

import { Dimensions } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// Base scale from a standard mobile size (e.g. iPhone 11)
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scale = (size: number) => (SCREEN_WIDTH / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (SCREEN_HEIGHT / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
