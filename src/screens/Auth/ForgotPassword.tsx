import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageStyle,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import ScreenWrapper from "../../components/ScreenWrapper";
import CustomButton from "../../components/CustomButton";
import CustomText from "../../components/CustomText";
import { CustomInput, ImageFast } from "../../components";

import fonts from "../../assets/fonts";
import { Colors } from "../../config/colors";
import { Images } from "../../assets/images";

// Replace this with your actual navigation param types
type RootStackParamList = {
  Login: undefined;
};

const ForgotPassword: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const init = {
    email: "",
   
  };

  const inits = {
    emailError: "",
  
  };

  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<typeof inits>(inits);
  const [state, setState] = useState<typeof init>(init);

  const array = [
    {
      id: 1,
      placeholder: "Your Email*",
      value: state.email,
      onChange: (text: string) => setState({ ...state, email: text }),
      error: errors.emailError,
      autoCapitalize: "none" as const,
    },
    
  ];

  return (
    <ScreenWrapper scrollEnabled backgroundColor={Colors.authBg}>
      <ImageFast source={Images.appLogo} style={styles.image} />
      <CustomText
        label="Forgot Password"
        fontFamily={fonts.semiBold}
        fontSize={30}
        marginTop={10}
        lineHeight={39}
        alignSelf="center"
      />
      <View style={styles.line} />
      <CustomText
        label="Enter Email to continue"
        fontFamily={fonts.semiBold}
        fontSize={17}
        marginBottom={30}
        alignSelf="center"
      />

      {array.map((item) => (
        <CustomInput
          key={item.id}
          placeholder={item.placeholder}
          value={item.value}
          onChangeText={item.onChange}
          autoCapitalize={item.autoCapitalize}
          error={item.error}
          backgroundColor="transparent"
        />
      ))}

      <CustomButton
        title="Continue"
        onPress={() => navigation.navigate("ResetPassword")}
        color={Colors.WHITE}
        backgroundColor={Colors.BLACK}
        borderRadius={2}
        marginTop={20}
        loading={loading}
        disabled={Object.keys(errors).some(
          (key) => errors[key as keyof typeof errors] !== ""
        )}
      />
     
      <CustomText
        label={`Remember Your Password?`}
        alignSelf="center"
        marginTop={10}
        textAlign="center"
        fontFamily={fonts.medium}
        width="70%"
      />

      <CustomText
        label="Login"
        alignSelf="center"
        marginTop={10}
        textDecorationLine="underline"
        fontFamily={fonts.semiBold}
        onPress={() => navigation.navigate("Login")}
      />
    </ScreenWrapper>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
  } as ViewStyle,
  image: {
    height: 70,
    width: 70,
    alignSelf: "center",
    marginTop: 80,
  } as ImageStyle,
  logoOutline: {
    padding: 10,
    backgroundColor: "#B29981",
    borderRadius: 99,
  } as ImageStyle,
  logo: {
    height: 40,
    width: 40,
    padding: 14,
  } as ImageStyle,
  line: {
    height: 50,
    marginVertical: 12,
    width: 2,
    alignSelf: "center",
    backgroundColor: Colors.BLACK,
  } as ViewStyle,
});
