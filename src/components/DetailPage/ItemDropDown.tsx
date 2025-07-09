import React, { useState } from "react";
import {
  TouchableOpacity,
  LayoutAnimation,
  StyleSheet,
  ScrollView,
  UIManager,
  View,
} from "react-native";

import CustomText from "../CustomText";
import Icons from "../Icons";

import { Colors } from "../../config/colors";
import fonts from "../../assets/fonts";

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

// Define prop types
interface OptionType {
  _id?: string;
  title?: string;
  [key: string]: any; // In case extra keys are passed
}

interface CustomDropdownProps {
  data?: OptionType[] | string[];
  value?: string;
  setValue?: (value: string) => void;
  showIcon?: boolean;
  placeholder?: string;
  error?: string;
  withLabel?: string;
  paddingHorizontal?: number;
  height?: number;
  title?: string;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}

const ItemDropDown: React.FC<CustomDropdownProps> = ({
  data = [],
  value = "",
  setValue = () => {},
  showIcon,
  placeholder = "Select",
  error,
  paddingHorizontal,
  height,
  title,
  rightIcon,
  children,
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
        style={styles.headerRow}
        onPress={toggleDropdown}
      >
        <CustomText
          label={title || text || value || placeholder}
          color={Colors.BLACK}
          fontFamily={fonts.semiBold}
          fontSize={18}
        />
        <Icons
          style={{ color: Colors.PRIMARY, fontSize: 20 }}
          family="Entypo"
          name={isOpen ? "chevron-up" : "chevron-down"}
        />
      </TouchableOpacity>
      {isOpen && (
        <View>
          {children ? (
            <View style={{ paddingVertical: 10 }}>{children}</View>
          ) : (
            data?.length > 0 && (
              <>
                {/* {data?.map((option, i) => (
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
                ))} */}
              </>
            )
          )}
        </View>
      )}
    </View>
  );
};

export default ItemDropDown;

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
    borderTopColor: Colors.LIGHT_GREY,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontFamily: fonts.medium,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});
