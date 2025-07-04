import React from "react";
import { StyleSheet, View, ImageStyle, ViewStyle } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import ScreenWrapper from "../../components/ScreenWrapper";
import { CustomButton, CustomText, ImageFast } from "../../components";
import { Colors } from "../../config/colors";
import { Images } from "../../assets/images";
import fonts from "../../assets/fonts";

type RootStackParamList = {
  Login: undefined;
};

const OnBoarding: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ScreenWrapper backgroundColor={Colors.authBg}>
      <ImageFast source={Images.appLogo} style={styles.image} />
      <View style={styles.line} />
      <CustomText
        label="DERIUS"
        alignSelf="center"
        fontSize={70}
        color="white"
        fontFamily={fonts.extraLight}
      />
      <CustomText
        label="ASSET COLLECTION"
        fontSize={16}
        marginBottom={40}
        alignSelf="center"
        color="white"
      />
      <View style={styles.row}>
        <CustomButton
          title="New Member?"
          backgroundColor="black"
          color="white"
          width={"47%"}
          borderRadius={2}
        />
        <CustomButton
          title="Login"
          width={"47%"}
          borderRadius={2}
          borderWidth={1}
          borderColor="black"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </ScreenWrapper>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
    alignSelf: "center",
    marginTop: 120,
  } as ImageStyle,
  line: {
    height: 140,
    marginVertical: 12,
    width: 2,
    alignSelf: "center",
    backgroundColor: Colors.BLACK,
  } as ViewStyle,
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  } as ViewStyle,
});
