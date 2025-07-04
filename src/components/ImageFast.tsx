import React from "react";
import { StyleProp } from "react-native";
import FastImage, {
  Source,
  ResizeMode,
  ImageStyle,
} from "react-native-fast-image";

type ImageFastProps = {
  source: Source | number;
  style?: StyleProp<ImageStyle>;
  resizeMode?: ResizeMode;
};

const ImageFast: React.FC<ImageFastProps> = ({ source, style, resizeMode }) => {
  return (
    <FastImage
      source={source}
      style={[{ width: "100%", height: "100%" }, style]}
      resizeMode={resizeMode}
    />
  );
};

export default ImageFast;
