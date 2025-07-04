import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RNRestart from "react-native-restart";
import { Colors } from "../config/colors";
import detailScreenStyles from "../styles/DetailScreenStyles";

const ErrorBoundaryScreen = (
  props: {
    error?: Error;
    FallbackComponent?:
      | React.ComponentType<{
          error: Error;
          resetError: () => void;
        }>
      | undefined;
  } & { errorStacktrace?: string },
) => {
  return (
    <View>
      <Text>ErrorBoundaryScreen</Text>
    </View>
  )
}

export default ErrorBoundaryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
  },
  icon: {
    marginVertical: 16,
  },
  title: {
    width: '100%',
    marginVertical: 32,
    fontSize: 30,
    lineHeight: 34,
    color: Colors.DARK_GREY,
    fontFamily: 'FiraGO',
    textAlign: 'center',
  },
  subTitle: {
    width: '100%',
    marginVertical: 16,
    fontSize: 20,
    lineHeight: 24,
    color: Colors.DARK_GREY,
    fontFamily: 'FiraGO',
    textAlign: 'center',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopColor: Colors.GREY,
    borderTopWidth: StyleSheet.hairlineWidth,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButtonContainer: {
    height: '50%',
    width: '90%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.ORANGE_ACTIVE,
  },
  bottomButtonText: {
    fontSize: 16,
    color: Colors.WHITE,
    fontFamily: 'FiraGO',
  },
});
