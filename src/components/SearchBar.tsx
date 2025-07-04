import React from "react";
import {
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
  TextInputEndEditingEventData,
  NativeSyntheticEvent,
} from "react-native";

import fonts from "../assets/fonts";

import CustomText from "./CustomText";
import Icons from "./Icons";
import { Colors } from "../config/colors";

type SearchBarProps = {
  placeHolder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onEndEditing?: (
    e: NativeSyntheticEvent<TextInputEndEditingEventData>
  ) => void;
  editable?: boolean;
  onFocus?: () => void;
  autoFocus?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  onSearchPress?: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
  placeHolder,
  value,
  onChangeText,
  onEndEditing,
  editable = true,
  onFocus,
  autoFocus,
  containerStyle,
  onSearchPress = () => {},
}) => {
  return (
    <View style={[styles.mainBox, containerStyle]}>
      <Pressable onPress={onSearchPress} style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.iconBox}
          onPress={onSearchPress}
        >
          <Icons
            size={23}
            color={"#fff"}
            name={"search"}
            family={"EvilIcons"}
          />
        </TouchableOpacity>
        {!editable ? (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={onSearchPress}
            style={styles.placeHolder}
          >
            <CustomText label={placeHolder} fontSize={13} />
          </TouchableOpacity>
        ) : (
          <TextInput
            value={value}
            onFocus={onFocus}
            editable={editable}
            autoFocus={autoFocus}
            style={styles.input}
            placeholder={placeHolder}
            onChangeText={onChangeText}
            onEndEditing={onEndEditing}
            cursorColor={Colors.PRIMARY}
            placeholderTextColor={Colors.DARK_GREY}
          />
        )}
      </Pressable>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  mainBox: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.GREY,
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Colors.LIGHT_GREY,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 50,
    flex: 1,
  },
  input: {
    color: Colors.BLACK,
    fontSize: 13,
    fontFamily: fonts.regular,
    flex: 1,
    lineHeight: 22,
    marginLeft: Platform.OS === "android" ? 6 : 10,
    top: Platform.OS === "android" ? 0.5 : 0,
    zIndex: 1,
    height: 50,
  },
  placeHolder: {
    marginLeft: 10,
    flex: 1,
    height: 50,
    justifyContent: "center",
  },
  iconBox: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: 32,
    height: 32,
  },
});
