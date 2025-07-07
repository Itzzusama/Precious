import React, { useState } from "react";
import {
  TouchableOpacity,
  LayoutAnimation,
  StyleSheet,
  ScrollView,
  UIManager,
  View,
} from "react-native";

import CustomText from "./CustomText";
import Icons from "./Icons";

import { Colors } from "../config/colors";
import fonts from "../assets/fonts";

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

// Define prop types
interface OptionType {
  _id?: string;
  title?: string;
  [key: string]: any; // In case extra keys are passed
}

interface CustomDropdownProps {
  data: OptionType[] | string[];
  value: string;
  setValue: (value: string) => void;
  showIcon?: boolean;
  placeholder?: string;
  error?: string;
  withLabel?: string;
  paddingHorizontal?: string;
  height?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  data,
  value,
  setValue,
  showIcon,
  placeholder = "Select",
  error,
  withLabel,
  paddingHorizontal,
  height,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");

  const toggleDropdown = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpen(!isOpen);
  };

  const selectOption = (option: OptionType | string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (typeof option === "object" && option?._id) {
      setValue(option._id);
      setText(option.title || "");
    } else if (typeof option === "string") {
      setValue(option);
      setText(option);
    }
    setIsOpen(false);
  };

  return (
    <>
      {withLabel && (
        <CustomText
          label={withLabel}
          fontFamily={fonts.medium}
          marginBottom={8}
          color={Colors.BLACK}
        />
      )}
      <View
        style={[
          styles.dropdownMainContainer,
          {
            marginBottom: error ? 5 : 15,
            borderColor: error ? Colors.RED : Colors.WHITE,
            borderRadius: isOpen ? 10 : 12,
          },
        ]}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          style={[
            styles.container,
            {
              paddingHorizontal: paddingHorizontal || 20,
              height: height || 52,
            },
          ]}
          onPress={toggleDropdown}
        >
          <CustomText
            label={text || value || placeholder}
            color={Colors.BLACK}
            fontFamily={fonts.semiBold}
          />
          {!showIcon ? (
            <Icons
              style={{ color: Colors.PRIMARY, fontSize: 20 }}
              family="Entypo"
              name={isOpen ? "chevron-up" : "chevron-down"}
            />
          ) : (
            <View />
          )}
        </TouchableOpacity>

        {isOpen && data?.length > 0 && (
          <ScrollView
            scrollEnabled
            nestedScrollEnabled
            showsVerticalScrollIndicator={false}
          >
            {data?.map((option, i) => (
              <TouchableOpacity
                style={styles.list}
                key={i}
                onPress={() => selectOption(option)}
              >
                <CustomText
                  label={
                    typeof option === "string"
                      ? option
                      : option._id
                      ? option.title
                      : ""
                  }
                  fontSize={12}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>
      {error && (
        <CustomText
          label={error}
          color={Colors.RED}
          fontFamily={fonts.semiBold}
          fontSize={10}
          marginBottom={15}
        />
      )}
    </>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  dropdownMainContainer: {
    width: "100%",
    maxHeight: 200,
    overflow: "scroll",
    borderWidth: 1,
    backgroundColor: Colors.WHITE,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",

    backgroundColor: Colors.WHITE,
    overflow: "scroll",
  },
  list: {
    borderTopWidth: 1,
    borderTopColor: Colors.LIGHT_GREY,
    paddingHorizontal: 15,
    paddingVertical: 7,
    fontFamily: fonts.medium,
  },
});
