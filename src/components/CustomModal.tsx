import React, { ReactNode } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";
import Modal from "react-native-modal";

type CustomModalProps = {
  isVisible: boolean;
  onDisable: () => void;
  backdropOpacity?: number;
  mainMargin?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginVertical?: number | string;
  marginHorizontal?: number | string;
  borderRadius?: number;
  overflow?: "visible" | "hidden" | "scroll";
  children?: ReactNode;
  isChange?: boolean;
};

const CustomModal: React.FC<CustomModalProps> = ({
  isVisible,
  onDisable,
  backdropOpacity,
  mainMargin,
  marginTop,
  marginBottom,
  marginVertical,
  marginHorizontal,
  borderRadius,
  overflow,
  children,
  isChange,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      animationIn="fadeIn"
      animationOut="fadeOut"
      onBackdropPress={onDisable}
      onBackButtonPress={onDisable}
      onDismiss={onDisable}
      backdropOpacity={backdropOpacity}
      style={[
        {
          margin: mainMargin,
          marginTop,
          marginBottom,
          marginVertical,
          marginHorizontal,
          borderRadius,
          overflow,
        } as StyleProp<ViewStyle>,
      ]}
    >
      <TouchableOpacity
        style={[isChange ? styles.mainContainer1 : styles.mainContainer]}
        activeOpacity={1}
        onPress={onDisable}
      >
        <TouchableOpacity style={styles.container} activeOpacity={1}>
          {children}
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer1: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
    // alignItems: "center",
  },
  container: {
    width: "100%",
  },
});
