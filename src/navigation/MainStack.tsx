import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import TabStack from "./TabStack";
import MyCollection from "../screens/Main/MyCollection";
import UserProfile from "../screens/Main/UserProfile";
import ChatList from "../screens/Main/ChatList";
import { RootStackParamList } from "./types";
import ChatScreen from "../screens/Main/ChatScreen";

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
      <Stack.Screen name="ChatList" component={ChatList} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
