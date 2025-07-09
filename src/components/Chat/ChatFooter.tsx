import { useEffect, useState } from "react";
import {
  Animated,
  Keyboard,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import fonts from "../../assets/fonts";
import { Colors } from "../../config/colors";
import Icons from "../Icons";

type FooterProps = {
  inputText: string;
  sendMessage: () => void;
  setInputText: (input: string) => void;
};

const ChatFooter: React.FC<FooterProps> = ({
  inputText,
  setInputText,
  sendMessage,
}) => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(new Animated.Value(0));

  useEffect(() => {
    const keyboardShowEvent =
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
    const keyboardHideEvent =
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";

    const keyboardShow = Keyboard.addListener(keyboardShowEvent, (event) => {
      setIsKeyboardVisible(true);
      Animated.timing(keyboardHeight, {
        duration: event.duration,
        toValue: event.endCoordinates.height,
        useNativeDriver: false,
      }).start();
    });

    const keyboardHide = Keyboard.addListener(keyboardHideEvent, (event) => {
      setIsKeyboardVisible(false);
      Animated.timing(keyboardHeight, {
        duration: event.duration,
        toValue: 0,
        useNativeDriver: false,
      }).start();
    });

    return () => {
      keyboardShow.remove();
      keyboardHide.remove();
    };
  }, []);

  const pb = Platform.OS === "android" ? 16 : isKeyboardVisible ? 20 : 35;

  return (
    <>
      <Animated.View
        style={[
          styles.mainContainer,
          { paddingBottom: pb, marginBottom: keyboardHeight },
        ]}
      >
        <View style={[styles.inputContainer]}>
          <TextInput
            style={[styles.input]}
            multiline
            value={inputText}
            placeholder="Type a message..."
            placeholderTextColor={Colors.GREY}
            onChangeText={(text) => setInputText(text)}
          />
        </View>

        <TouchableOpacity
          style={styles.sendBtn}
          onPress={sendMessage}
          disabled={!inputText || inputText?.trim() === ""}
        >
          <Icons name={"send"} size={18} color="#fff" />
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};

export default ChatFooter;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 16,
    width: "100%",
    backgroundColor: Colors.WHITE,
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.LIGHT_GREY,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 48,
    width: "85%",
    backgroundColor: Colors.WHITE,
    borderRadius: 6,
    marginRight: 12,
    borderWidth: 1,
    borderColor: Colors.LIGHT_GREY,
    borderTopWidth: 1,
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    padding: 0,
    margin: 0,
    fontFamily: fonts.regular,
    fontSize: 14,
    color: Colors.BLACK,
    maxHeight: 100,
  },

  sendBtn: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.NAVY_BLUE,
    borderRadius: 50,
  },
});
