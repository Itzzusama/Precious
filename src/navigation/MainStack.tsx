import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ChatList from "../screens/Main/ChatList";
import ChatScreen from "../screens/Main/ChatScreen";
import DetailPage from "../screens/Main/DetailPage";
import MyAddress from "../screens/Main/MyAddress";
import MyCollection from "../screens/Main/MyCollection";
import PersonalInformation from "../screens/Main/PersonalInformation";
import ProfileSetting from "../screens/Main/ProfileSetting";
import Subscription from "../screens/Main/Subscription";
import UserProfile from "../screens/Main/UserProfile";
import TabStack from "./TabStack";
import { RootStackParamList } from "./types";
import { Icons, ImageFast } from "../components";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../config/colors";
import { useNavigation } from "@react-navigation/native";
import CreateAd from "../screens/Main/CreateAd";
import PrivacyPolicy from "../screens/Main/ProfileScreens/PrivacyPolicy";
import TermsCondition from "../screens/Main/ProfileScreens/TermsCondition";
import Faqs from "../screens/Main/ProfileScreens/Faqs";
import OrderPage from "../screens/Main/ProfileScreens/OrderPage";

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack: React.FC = () => {
  const navigation = useNavigation();
  return (

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_bottom",
        }}
      >
        <Stack.Screen name="TabStack" component={TabStack} />
        <Stack.Screen name="MyCollection" component={MyCollection} />
        <Stack.Screen name="CreateAd" component={CreateAd} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="ProfileSetting" component={ProfileSetting} />
        <Stack.Screen
          name="PersonalInformation"
          component={PersonalInformation}
        />
        <Stack.Screen name="Faqs" component={Faqs} />
        <Stack.Screen name="ChatList" component={ChatList} />
        <Stack.Screen name="MyAddress" component={MyAddress} />
        <Stack.Screen name="OrderPage" component={OrderPage} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="DetailPage" component={DetailPage} />
        <Stack.Screen name="Subscription" component={Subscription} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="TermsCondition" component={TermsCondition} />
      </Stack.Navigator>


  );
};

export default MainStack;
const styles = StyleSheet.create({
  
  tabIcon: {
    width: 30,
    height: 30,
  },
});
