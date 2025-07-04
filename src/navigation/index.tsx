import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useSelector } from "react-redux";

import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

// Define the RootStackParamList type if you want better typing
type RootStackParamList = {
  AuthStack: undefined;
  MainStack: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// Define the shape of your Redux state
interface RootState {
  authConfig: {
    token: string | null;
  };
}

const RootNavigation: React.FC = () => {
  const isToken = useSelector((state: RootState) => state.authConfig.token);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_bottom",
      }}
    >
      {isToken ? (
        <Stack.Screen name="MainStack" component={MainStack} />
      ) : (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigation;
