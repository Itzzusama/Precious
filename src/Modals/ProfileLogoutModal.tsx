import React from "react";
import { StyleSheet, View } from "react-native";

import { CustomButton, CustomModal, CustomText, Icons } from "../components";

import fonts from "../assets/fonts";
import { Colors } from "../config/colors";

type FilterModalProps = {
  isVisible?: boolean;
  onDisable?: () => void;
  onPress?: () => void;
  loading?: boolean;
};

const options = [
  {
    id: 1,
    name: "Reset Password",
    icon: "lock-reset",
    family: "MaterialCommunityIcons",
  },
  {
    id: 2,
    name: "Feedback",
    icon: "message-circle",
    family: "Feather",
  },
  {
    id: 3,
    name: "Delete Account",
    icon: "deleteuser",
    family: "AntDesign",
  },
  {
    id: 4,
    name: "Share Profile",
    icon: "share-outline",
    family: "MaterialCommunityIcons",
  },
];

const ProfileLogoutModal: React.FC<FilterModalProps> = ({
  isVisible,
  onDisable,
  onPress,
  loading,
}) => {
  return (
    <CustomModal
      backdropOpacity={0.8}
      isVisible={isVisible}
      onDisable={onDisable}
      isChange
    >
      <View style={[styles.mainContainer]}>
        <View
          style={{
            height: 6,
            width: "14%",
            backgroundColor: Colors.GREY,
            borderRadius: 99,
            marginBottom: 30,
          }}
        />
        <View style={styles.bg}>
          {options.map((option) => (
            <View key={option.id} style={styles.optionRow}>
              <Icons
                name={option.icon}
                family={option.family}
                size={22}
                color={Colors.BLACK}
                style={{ marginRight: 12 }}
              />
              <CustomText
                label={option.name}
                fontFamily={fonts.semiBold}
                fontSize={16}
              />
            </View>
          ))}
        </View>

        <CustomButton
          title="Logout"
          marginTop={20}
          backgroundColor="black"
          color="white"
        />
        <CustomButton
          title="Delete Account"
          marginTop={20}
          borderWidth={1}
          borderColor="black"
          backgroundColor="transparent"
          color="black"
        />
      </View>
    </CustomModal>
  );
};

export default ProfileLogoutModal;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 25,
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    alignItems: "center",
    paddingTop: 35,
    width: "94%",
    alignSelf: "center",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  bg: {
    backgroundColor: Colors.LIGHT_GREY,
    padding: 16,
    width: "100%",
    borderRadius: 14,
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: Colors.LIGHT_GREY,
    marginBottom: 18,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
});
