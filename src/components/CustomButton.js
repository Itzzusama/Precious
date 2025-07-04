import { TouchableOpacity, ActivityIndicator, Animated } from "react-native";
import React, { useState } from "react";

import CustomText from "./CustomText";


import fonts from "../assets/fonts";
import { Colors } from "../config/colors";

const CustomButton = ({
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
  borderRadius = 12,
  justifyContent = "center",
  alignItems = "center",
  flexDirection = "row",
  alignSelf = "center",
  fontSize,
  indicatorcolor,
  marginRight,
  borderWidth,
  borderColor,
}) => {
  const [animation] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.spring(animation, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animation, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={{
        transform: [{ scale: animation }],
        width,
        alignSelf,
        marginRight,
        marginTop,
        marginBottom,
      }}
    >
      <TouchableOpacity
        disabled={loading || disabled}
        activeOpacity={0.6}
        style={[
          {
            backgroundColor: disabled
              ? Colors.gray
              : backgroundColor
              ? backgroundColor
              : Colors.primaryColor,

            width: "100%",
            height,
            borderRadius,
            flexDirection,
            alignItems,
            justifyContent,
            borderWidth,
            borderColor,
          },
          customStyle,
        ]}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        {loading && (
          <ActivityIndicator
            size={25}
            color={indicatorcolor ? Colors.primaryColor : Colors.white}
          />
        )}
        {!loading && (
          <CustomText
            textStyle={customText}
            label={title}
            color={color ? color : Colors.white}
            fontFamily={fonts.semiBold}
            fontSize={fontSize || 15}
            lineHeight={22}
            marginTop={-2}
            marginBottom={0}
          />
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default CustomButton;
