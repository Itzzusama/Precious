import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import TabStack from "./TabStack";
import MyCollection from "../screens/Main/MyCollection";

// Define stack param list
type MainStackParamList = {
  PolicyPage: undefined;
  TabStack: undefined;
  MyCollection: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

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
    </Stack.Navigator>
  );
};

export default MainStack;