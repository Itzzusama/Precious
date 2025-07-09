import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import fonts from "../../assets/fonts";
import { CustomInput, ScreenWrapper } from "../../components";
import CustomText from "../../components/CustomText";
import Header from "../../components/Header";
import Icons from "../../components/Icons";
import { Colors } from "../../config/colors";
import { useNavigation } from "@react-navigation/native";

interface UserInfo {
  userName: string;
  email: string;
  phoneNumber: string;
}

interface Errors {
  userNameError: string;
  emailError: string;
  phoneError: string;
}

interface InputField {
  id: number;
  placeholder: string;
  key: keyof UserInfo;
  value: string;
  error: string;
}

const PersonalInformation: React.FC = () => {
  const navigation = useNavigation();
  const init: UserInfo = {
    userName: "Lucy Watson",
    email: "lucywatson@gmail.com",
    phoneNumber: "+13123654789",
  };

  const inits: Errors = {
    userNameError: "",
    emailError: "",
    phoneError: "",
  };

  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>(inits);
  const [state, setState] = useState<UserInfo>(init);

  const inputs: InputField[] = [
    {
      id: 1,
      placeholder: "Your Name*",
      key: "userName",
      value: state.userName,
      error: errors.userNameError,
    },
    {
      id: 2,
      placeholder: "Your Email*",
      key: "email",
      value: state.email,
      error: errors.emailError,
    },
    {
      id: 3,
      placeholder: "Phone Number",
      key: "phoneNumber",
      value: state.phoneNumber,
      error: errors.phoneError,
    },
  ];

  return (
    <ScreenWrapper
      paddingHorizontal={14}
      headerUnScrollable={() => (
        <Header isBack profile name="Personal Information" />
      )}
    >
      {inputs.map((item) => (
        <CustomInput
          key={item.id}
          placeholder={item.placeholder}
          value={item.value}
          onChangeText={(text: string) =>
            setState((prev) => ({ ...prev, [item.key]: text }))
          }
          autoCapitalize="none"
          error={item.error}
          withLabel={item.placeholder}
          backgroundColor="transparent"
        />
      ))}

      {/* Change Password */}
      <TouchableOpacity style={[styles.row, { marginTop: 40 }]}>
        <CustomText
          label="Change Password"
          fontSize={16}
          fontFamily={fonts.bold}
        />
        <Icons
          family="Feather"
          name="chevron-right"
          size={22}
          color={Colors.BLACK}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.row, { marginTop: 20 }]}
        onPress={() => navigation.navigate("MyAddress")}
      >
        <CustomText
          label="Change Address"
          fontSize={16}
          fontFamily={fonts.bold}
        />
        <Icons
          family="Feather"
          name="chevron-right"
          size={22}
          color={Colors.BLACK}
        />
      </TouchableOpacity>

      {/* Delete Account */}
      <TouchableOpacity style={styles.deleteBtn}>
        <CustomText
          label="Delete Account"
          fontSize={17}
          fontFamily={fonts.bold}
          color={Colors.RED}
        />
      </TouchableOpacity>
    </ScreenWrapper>
  );
};

export default PersonalInformation;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  deleteBtn: {
    marginTop: 30,
    alignSelf: "flex-start",
  },
});
