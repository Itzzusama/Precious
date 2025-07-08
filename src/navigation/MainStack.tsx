import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import TabStack from "./TabStack";
import MyCollection from "../screens/Main/MyCollection";
import UserProfile from "../screens/Main/UserProfile";
import PersonalInformation from "../screens/Main/PersonalInformation";
import ProfileSetting from "../screens/Main/ProfileSetting";

// Define stack param list
type MainStackParamList = {
  PolicyPage: undefined;
  TabStack: undefined;
  MyCollection: undefined;
  UserProfile: undefined;
  ProfileSetting: undefined;
  PersonalInformation: undefined;
  ChatList: undefined;
  ChatScreen: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();
import ChatList from "../screens/Main/ChatList";
import { RootStackParamList } from "./types";
import ChatScreen from "../screens/Main/ChatScreen";

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
    </Stack.Navigator>
  );
};

export default MainStack;
