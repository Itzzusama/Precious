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

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_bottom",
      }}
    >
      <Stack.Screen name="TabStack" component={TabStack} />
      <Stack.Screen name="MyCollection" component={MyCollection} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="ProfileSetting" component={ProfileSetting} />
      <Stack.Screen
        name="PersonalInformation"
        component={PersonalInformation}
      />
      <Stack.Screen name="ChatList" component={ChatList} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="MyAddress" component={MyAddress} />
      <Stack.Screen name="DetailPage" component={DetailPage} />
      <Stack.Screen name="Subscription" component={Subscription} />
    </Stack.Navigator>
  );
};

export default MainStack;
