/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import fonts from "../assets/fonts";
import CustomText from "./CustomText";
import Icons from "./Icons";
import { Colors } from "../config/colors";

type CustomInputProps = {
  placeholder?: string;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  keyboardType?: TextInputProps["keyboardType"];
  multiline?: boolean;
  maxLength?: number;
  placeholderTextColor?: string;
  editable?: boolean;
  textAlignVertical?: "auto" | "top" | "bottom" | "center";
  marginBottom?: number;
  autoCapitalize?: TextInputProps["autoCapitalize"];
  error?: string | boolean | null | undefined;
  isFocus?: () => void;
  isBlur?: () => void;
  width?: number | `${number}%`;
  onEndEditing?: () => void;
  autoFocus?: boolean;
  ref?: React.Ref<TextInput>;
  searchIcon?: boolean;
  borderRadius?: number;
  marginTop?: number;
  withLabel?: string;
  onMail?: () => void;
  onBlur?: () => void;
  backgroundColor?: string;
  color?: string;
  height?: number;
  customize?: StyleProp<TextStyle>;
};

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  keyboardType,
  multiline,
  maxLength,
  placeholderTextColor,
  editable = true,
  textAlignVertical,
  marginBottom,
  autoCapitalize,
  error,
  isFocus,
  isBlur,
  width,
  onEndEditing,
  autoFocus,
  ref,
  searchIcon,
  borderRadius,
  marginTop,
  withLabel,
  onMail,
  onBlur,
  backgroundColor,
  color = Colors.BLACK,
  height = 56,
  customize,
}) => {
  const isError =
    error !== undefined && error !== null && error !== true && error !== "";

  const [hidePass, setHidePass] = useState(true);

  const handleFocus = () => {
    isFocus?.();
  };

  const handleBlur = () => {
    onBlur?.();
    isBlur?.();
  };

  return (
    <>
      {withLabel && (
        <CustomText
          label={withLabel}
          marginBottom={5}
          fontSize={14}
          color={"#717579"}
        />
      )}
      <View
        style={[
          styles.mainContainer,
          {
            marginBottom: isError ? 5 : marginBottom || 15,
            marginTop,
            borderColor: Colors.BLACK,
            height: height,
            width: width || "100%",
            borderRadius: borderRadius || 8,
            backgroundColor: backgroundColor || Colors.WHITE,
            borderBottomWidth: 1,
          },
        ]}
      >
        {searchIcon && (
          <Icons
            family="Feather"
            name="search"
            size={20}
            color={Colors.BLACK}
          />
        )}

        <TextInput
          ref={ref}
          placeholder={placeholder}
          style={[
            styles.input,
            customize,
            {
              width: secureTextEntry ? "92%" : "98%",
              paddingVertical: multiline ? 10 : 0,
              paddingHorizontal: searchIcon || onMail ? 10 : 0,
              color: color,
            },
          ]}
          secureTextEntry={secureTextEntry ? hidePass : false}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          multiline={multiline}
          onEndEditing={onEndEditing}
          maxLength={maxLength}
          placeholderTextColor={placeholderTextColor || Colors.BLACK}
          editable={editable}
          textAlignVertical={multiline ? "top" : textAlignVertical}
          autoCapitalize={autoCapitalize}
          autoFocus={autoFocus}
          cursorColor={Colors.BLACK}
        />
        {secureTextEntry && (
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setHidePass(!hidePass)}
          >
            <Icons
              size={20}
              family="Octicons"
              color={Colors.BLACK}
              name={!hidePass ? "eye" : "eye-closed"}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  input: {
    height: "100%",
    padding: 0,
    margin: 0,
    fontFamily: fonts.regular,
    fontSize: 15,
    flex: 1,
  },
  icon: {
    width: "8%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
