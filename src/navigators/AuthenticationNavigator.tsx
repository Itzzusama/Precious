import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../config/colors';
import PolicyPage from '../screens/PolicyPage';
import Login from '../screens/Auth/Login';
import { AuthenticationNavigatorScreenNames } from '../config/enums';
import { HeaderBackChevron } from '../components/presentation/NavigationComponents';

export type AuthenticationNavigatorProps = {
  Login: undefined;
  AuthPolicyPage: undefined;
};

const Stack = createNativeStackNavigator<AuthenticationNavigatorProps>();

export default function AuthenticationNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={AuthenticationNavigatorScreenNames.Login}
    >
      <Stack.Screen
        name={AuthenticationNavigatorScreenNames.AuthPolicyPage}
        component={PolicyPage}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: Colors.WHITE,
          },
          headerShadowVisible: false,
          title: '',
          headerBackVisible: false,
          headerLeft: () => {
            return <HeaderBackChevron
              color={Colors.GREY}
              size={34}
              onPress={() => navigation.goBack()}
            />;
          },
        })}
      />
      <Stack.Screen
        name={AuthenticationNavigatorScreenNames.Login}
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
