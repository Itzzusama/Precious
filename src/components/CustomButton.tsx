import React from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import CustomText from "./CustomText";
import fonts from "../assets/fonts";
import { Colors } from "../config/colors";

type CustomButtonProps = {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  loading?: boolean;
  customStyle?: StyleProp<ViewStyle>;
  customText?: StyleProp<TextStyle>;
  marginBottom?: number;
  marginTop?: number;
  backgroundColor?: string;
  color?: string;
  height?: number;
  borderRadius?: number;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  alignSelf?:
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "baseline";
  width?: number | `${number}%`;
  fontSize?: number;
  indicatorcolor?: string;
  ImageIcon?: React.ReactNode;
  borderWidth?: number;
  borderColor?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  disabled,
  loading,
  customStyle,
  customText,
  marginBottom,
  marginTop,
  backgroundColor,
  color,
  width = "100%",
  height = 56,
  borderRadius = 8,
  justifyContent = "center",
  alignItems = "center",
  flexDirection = "row",
  alignSelf = "center",
  fontSize,
  indicatorcolor,
  ImageIcon,
  borderWidth = 0,
  borderColor,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      activeOpacity={0.6}
      style={[
        {
          backgroundColor: backgroundColor || Colors.PRIMARY,
          marginTop,
          marginBottom,
          width,
          height,
          borderRadius,
          flexDirection,
          alignItems,
          justifyContent,
          alignSelf,
          borderWidth,
          borderColor,
        },
        customStyle,
      ]}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator size={25} color={indicatorcolor || Colors.WHITE} />
      ) : (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {ImageIcon && ImageIcon}
          <View>
            <CustomText
              label={title}
              lineHeight={28}
              textStyle={customText}
              fontSize={fontSize || 15}
              fontFamily={fonts.semiBold}
              color={color || "#fff"}
            />
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
