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

const CustomText: React.FC<CustomTextProps> = ({
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
}) => {
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
          alignSelf: alignSelf,
          fontFamily: fontFamily || fonts.regular,
          fontStyle: fontStyle,
          lineHeight: lineHeight,
          letterSpacing: letterSpacing || 0,
          textAlign: textAlign,
          textTransform: textTransform,
          fontWeight: fontWeight,
          bottom: bottom,
          borderBottomWidth: borderBottomWidth,
          borderColor: borderColor,
          width: width,
          marginVertical: marginVertical,
          paddingBottom: paddingBottom,
          right: right,
          left: left,
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
