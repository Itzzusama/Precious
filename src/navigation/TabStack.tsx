import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Explore from "../screens/Main/Explore";

type TabStackParamList = {
  Explore: undefined;
};

const Stack = createNativeStackNavigator<TabStackParamList>();

const TabStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_bottom",
      }}
    >
      <Stack.Screen name="Explore" component={Explore} />
    </Stack.Navigator>
  );
};

export default TabStack;
