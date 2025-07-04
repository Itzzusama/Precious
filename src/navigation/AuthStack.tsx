import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../screens/Auth/Login";
import OnBoarding from "../screens/Auth/OnBoarding";
import Password from "../screens/Auth/Password";

// Define the stack parameter list
type AuthStackParamList = {
  OnBoarding: undefined;
  Login: undefined;
  Password: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_bottom",
      }}
    >
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Password" component={Password} />
    </Stack.Navigator>
  );
};

export default AuthStack;
