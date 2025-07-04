import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from '../config/colors';
import AuthenticationNavigator from '../navigators/AuthenticationNavigator';

const SplashScreen = () => {
  const [showLogingScreen, setShowLoginScreen] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setShowLoginScreen(true);
    }, 1000);
  }, []);

  if (!showLogingScreen) {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Precious</Text>
      </View>
    );
  } else {
    return <AuthenticationNavigator />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  label: {
    top: '30%',
    color: Colors.BLACK,
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
