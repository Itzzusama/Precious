import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import PolicyPage from '../screens/PolicyPage';

// Define stack param list
type MainStackParamList = {
  PolicyPage: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_bottom',
      }}
    >
      <Stack.Screen name="PolicyPage" component={PolicyPage} />
    </Stack.Navigator>
  );
};

export default MainStack;
