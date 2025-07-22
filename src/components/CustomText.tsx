import React from "react";
import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TextStyle,
} from "react-native";
import fonts from "../assets/fonts";
import { Colors } from "../config/colors";

type CustomTextProps = {
  textStyle?: StyleProp<TextStyle>;
  fontSize?: number;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  alignSelf?:
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "baseline";
  fontFamily?: string;
  fontStyle?: "normal" | "italic";
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  label?: string;
  color?: string;
  fontWeight?: TextStyle["fontWeight"];
  bottom?: number;
  borderColor?: string;
  width?: number | `${number}%`;
  borderBottomWidth?: number;
  onPress?: (event: GestureResponderEvent) => void;
  marginVertical?: number;
  paddingBottom?: number;
  textDecorationLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through";
  lineHeight?: number;
  right?: number;
  left?: number;
  numberOfLines?: number;
  letterSpacing?: number;
  children?: React.ReactNode;
};

const CustomText = ({
  textStyle,
  fontSize,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  alignSelf,
  fontFamily,
  fontStyle,
  textTransform,
  textAlign,
  label,
  color,
  fontWeight,
  bottom,
  width,
  borderColor,
  borderBottomWidth,
  onPress,
  marginVertical,
  paddingBottom,
  textDecorationLine,
  lineHeight,
  right,
  left,
  numberOfLines,
  children,
  letterSpacing,
}: CustomTextProps): JSX.Element => {
  return (
    <Text
      numberOfLines={numberOfLines}
      onPress={onPress}
      style={[
        {
          fontSize: fontSize || 14,
          color: color || Colors.BLACK,
          marginTop: marginTop || 0,
          marginBottom: marginBottom || 0,
          marginLeft: marginLeft || 0,
          marginRight: marginRight || 0,
          alignSelf,
          fontFamily: fontFamily || fonts.regular,
          fontStyle,
          lineHeight,
          letterSpacing: letterSpacing || 0,
          textAlign,
          textTransform,
          fontWeight,
          bottom,
          borderBottomWidth,
          borderColor,
          width,
          marginVertical,
          paddingBottom,
          right,
          left,
          textDecorationLine: textDecorationLine || "none",
        },
        textStyle,
      ]}
    >
      {label}
      {children}
    </Text>
  );
};

export default CustomText;
