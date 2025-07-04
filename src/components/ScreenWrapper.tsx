/* eslint-disable react-native/no-inline-styles */
import { useIsFocused } from "@react-navigation/native";
import React, { ReactNode } from "react";
import {
  Dimensions,
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
  scrollEnabled = false,
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
    <View
      style={[
        styles.container,
        {
          paddingBottom: paddingBottom,
          backgroundColor: backgroundImage ? "transparent" : backgroundColor,
        },
      ]}
    >
      <FocusAwareStatusBar
        barStyle={"dark-content"}
        backgroundColor={statusBarColor}
        translucent={translucent}
      />
      {!translucent && (
        <SafeAreaView
          style={[styles.container, { backgroundColor: statusBarColor }]}
        />
      )}
      {headerUnScrollable()}
      {scrollEnabled ? (
        <KeyboardAwareScrollView
          nestedScrollEnabled={nestedScrollEnabled}
          refreshControl={refreshControl}
          style={[
            styles.container,
            { backgroundColor, paddingHorizontal: paddingHorizontal || 25 },
          ]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {children}
        </KeyboardAwareScrollView>
      ) : (
        <View style={{ paddingHorizontal: paddingHorizontal || 25, flex: 1 }}>
          {children}
        </View>
      )}
      {footerUnScrollable()}
    </View>
  );

  return backgroundImage ? (
    <View style={{ width, height, zIndex: 999 }}>
      {content()}
      <ImageFast
        source={backgroundImage}
        style={{ width, height, position: "absolute", zIndex: -1 }}
        resizeMode="cover"
      />
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
