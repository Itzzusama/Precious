/* eslint-disable react-native/no-inline-styles */
import { useIsFocused } from "@react-navigation/native";
import React, { ReactNode } from "react";
import {
  Dimensions,
  Platform,
  RefreshControlProps,
  SafeAreaView,
  StatusBar,
  StatusBarProps,
  StyleSheet,
  View,
} from "react-native";
import { Source } from "react-native-fast-image";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Colors } from "../config/colors";
import ImageFast from "./ImageFast";

const { width, height } = Dimensions.get("window");

const FocusAwareStatusBar: React.FC<StatusBarProps> = (props) => {
  const isFocused = useIsFocused();
  return isFocused ? (
    <StatusBar
      barStyle="dark-content"
      backgroundColor={Colors.WHITE}
      {...props}
    />
  ) : null;
};

type ScreenWrapperProps = {
  children: ReactNode;
  statusBarColor?: string;
  translucent?: boolean;
  scrollEnabled?: boolean;
  backgroundColor?: string;
  headerUnScrollable?: () => ReactNode;
  footerUnScrollable?: () => ReactNode;
  refreshControl?: React.ReactElement<RefreshControlProps>;
  paddingBottom?: number;
  nestedScrollEnabled?: boolean;
  paddingHorizontal?: number;
  backgroundImage?: Source | number;
};

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  statusBarColor = Colors.WHITE,
  translucent = false,
  scrollEnabled = true,
  backgroundImage,
  backgroundColor = Colors.WHITE,
  headerUnScrollable = () => null,
  footerUnScrollable = () => null,
  refreshControl,
  paddingBottom,
  nestedScrollEnabled,
  paddingHorizontal,
}) => {
  const content = () => (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: backgroundImage ? "transparent" : backgroundColor,
        },
      ]}
    >
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={statusBarColor}
        translucent={translucent}
      />

      {headerUnScrollable()}

      {scrollEnabled ? (
        <KeyboardAwareScrollView
          nestedScrollEnabled={nestedScrollEnabled}
          refreshControl={refreshControl}
          style={{ flex: 1 }}
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: paddingHorizontal ?? 16,
            paddingBottom: paddingBottom,
          }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {children}
        </KeyboardAwareScrollView>
      ) : (
        <View
          style={{
            flex: 1,
            paddingHorizontal: paddingHorizontal ?? 25,
            paddingBottom,
          }}
        >
          {children}
        </View>
      )}

      {footerUnScrollable()}
    </SafeAreaView>
  );

  return backgroundImage ? (
    <View style={{ flex: 1 }}>
      <ImageFast
        source={backgroundImage}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
      />
      {content()}
    </View>
  ) : (
    content()
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
