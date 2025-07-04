import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import ScreenWrapper from "../../components/ScreenWrapper";

import CustomButton from "../../components/CustomButton";
import CustomText from "../../components/CustomText";
import { Colors } from "../../config/colors";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();

  const init = {
    email: "",
    password: "",
  };
  const inits = {
    emailError: "",
    passwordError: "",
  };

  const [GoogleLoading, setGoogleLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const [errors, setErrors] = useState(inits);
  const [state, setState] = useState(init);

  const array = [
    {
      id: 1,
      placeholder: "Email",
      value: state.email,
      onChange: (text) => setState({ ...state, email: text }),
      error: errors?.emailError,
      autoCapitalize: "none",
    },
  ];
  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       "148425273197-gg83ap4ae9ehb0io2a8fmri98v309brt.apps.googleusercontent.com",
  //   });
  // }, []);

  // const onGoogleButtonPress = async () => {
  //   setGoogleLoading(true);
  //   try {
  //     await GoogleSignin.hasPlayServices({
  //       showPlayServicesUpdateDialog: true,
  //     });
  //     await GoogleSignin.signOut();
  //     const user = await GoogleSignin.signIn();
  //     try {
  //       const FCMTOKEN = await AsyncStorage.getItem("fcmToken");
  //       const body = {
  //         fname:
  //           user?.data?.user?.givenName + " " + user?.data?.user?.familyName,
  //         email: user?.data?.user?.email,
  //         profilePicture: user?.data?.user?.photo,
  //         fcmtoken: FCMTOKEN ? FCMTOKEN : "",
  //       };
  //       const response = await post("users/google/auth", body);
  //       console.log("reso-------", response.data);

  //       if (response.data.token) {
  //         await AsyncStorage.setItem("token", response.data?.token);
  //         dispatch(setToken(response.data?.token));
  //         dispatch(setUserData(response.data?.user));
  //         navigation.reset({
  //           index: 0,
  //           routes: [
  //             {
  //               name: "MainStack",
  //             },
  //           ],
  //         });
  //       }
  //     } catch (error) {
  //       ToastMessage(error.response.data.message);
  //     } finally {
  //       setGoogleLoading(false);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     // setGoogleLoading(false);
  //   }
  // };

  // const handleLogin = async () => {
  //   try {
  //     setLoading(true);
  //     const fcmToken = await AsyncStorage.getItem("fcmToken");
  //     const body = {
  //       email: state.email,
  //       password: state.password,
  //       fcmtoken: fcmToken ? fcmToken : "",
  //       user_type: authType,
  //     };
  //     const response = await post("auth", body);
  //     console.log("resonndddd-------", response);
  //     if (response?.error?.data?.userStatus == "deactivated") {
  //       setContactModal(true);
  //     } else if (response.data?.token) {
  //       await AsyncStorage.setItem("token", response.data?.token);
  //       dispatch(setToken(response.data?.token));
  //       dispatch(setUserData(response.data?.user));
  //       navigation.reset({
  //         index: 0,
  //         routes: [
  //           {
  //             name: "MainStack",
  //           },
  //         ],
  //       });
  //     }
  //   } catch (error) {
  //     console.log("err-----------", error);
  //     setLoading(false);
  //     // ToastMessage(error?.response?.data?.message);
  //     console.log("fhhjhhjbhvhj", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const errorCheck = useMemo(() => {
  //   return () => {
  //     let newErrors = {};
  //     if (!state.email) newErrors.emailError = "Please enter Email address";
  //     else if (!regEmail.test(state.email))
  //       newErrors.emailError = "Please enter valid email";
  //     else if (!state.password)
  //       newErrors.passwordError = "Please enter Password";
  //     else if (!passwordRegex.test(state.password))
  //       newErrors.passwordError =
  //         "Password must contain 1 number, 1 special character, Uppercase and 8 digits";
  //     setErrors(newErrors);
  //   };
  // }, [state]);

  // useEffect(() => {
  //   errorCheck();
  // }, [errorCheck]);

  return (
    <ScreenWrapper scrollEnabled headerUnScrollable={() => <AuthHeader />}>
      <CustomText
        label="Welcome back!"
        fontFamily={fonts.semiBold}
        fontSize={30}
        marginTop={10}
        lineHeight={39}
      />
      <CustomText
        label="Sign In to explore our App!"
        fontFamily={fonts.semiBold}
        fontSize={17}
        marginBottom={30}
      />

      {array?.map((item) => (
        <CustomInput
          key={item?.id}
          placeholder={item.placeholder}
          value={item.value}
          onChangeText={item.onChange}
          autoCapitalize={item.autoCapitalize}
          error={item.error}
          withLabel={item.withLabel}
          secureTextEntry={item.id === 2}
          mailIcon={item.id == 1}
          lockIcon={item.id == 2}
        />
      ))}
      <CustomText
        label="Forgot Password?"
        fontFamily={fonts.semiBold}
        alignSelf="flex-end"
        marginBottom={25}
        marginTop={7}
        onPress={() => navigation.navigate("ForgetPass")}
      />

      <CustomButton
        title="Sign in"
        onPress={handleLogin}
        loading={loading}
        disabled={Object.keys(errors).some((key) => errors[key] !== "")}
      />
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  line: {
    width: "28%",
    height: 1,
    backgroundColor: Colors.authBg,
  },
});
