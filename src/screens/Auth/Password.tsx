import React, { useState } from "react";
import { StyleSheet, View, ImageStyle, ViewStyle } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import ScreenWrapper from "../../components/ScreenWrapper";
import CustomButton from "../../components/CustomButton";
import CustomText from "../../components/CustomText";
import { CustomInput, ImageFast } from "../../components";

import fonts from "../../assets/fonts";
import { Colors } from "../../config/colors";
import { Images } from "../../assets/images";

type RootStackParamList = {
  Login: undefined;
  // Add other screens as needed
};

const Password: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const init = {
    password: "",
  };

  const inits = {
    passwordError: "",
  };

  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<typeof inits>(inits);
  const [state, setState] = useState<typeof init>(init);

  const array = [
    {
      id: 1,
      placeholder: "Your password",
      value: state.password,
      onChange: (text: string) => setState({ ...state, password: text }),
      error: errors?.passwordError,
      autoCapitalize: "none" as const,
    },
  ];

  return (
    <ScreenWrapper scrollEnabled backgroundColor={Colors.authBg}>
      <ImageFast source={Images.appLogo} style={styles.image} />
      <CustomText
        label="Welcome back!"
        fontFamily={fonts.semiBold}
        fontSize={30}
        marginTop={10}
        lineHeight={39}
        alignSelf="center"
      />
      <View style={styles.line} />
      <CustomText
        label="Log in"
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
          secureTextEntry
        />
      ))}
      <CustomText label="Forgot Password?" alignSelf="flex-end" />

      <CustomButton
        title="Continue"
        // onPress={handleLogin}
        color={Colors.WHITE}
        backgroundColor={Colors.BLACK}
        borderRadius={2}
        marginTop={20}
        loading={loading}
        disabled={Object.keys(errors).some(
          (key) => errors[key as keyof typeof errors] !== ""
        )}
      />
    </ScreenWrapper>
  );
};

export default Password;

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
  line: {
    height: 50,
    marginVertical: 12,
    width: 2,
    alignSelf: "center",
    backgroundColor: Colors.BLACK,
  } as ViewStyle,
});
