import { StyleSheet, View } from "react-native";
import { Colors } from "../../config/colors";
import { formatTime } from "../../config/utils";
import CustomText from "../CustomText";

type BubbleProps = {
  isSender: boolean;
  item: any;
};

const ChatBubble: React.FC<BubbleProps> = ({ isSender, item }) => {
  const bg = isSender ? Colors.NAVY_BLUE : Colors.LIGHT_GREY_DARK;

  return (
    <View style={{ marginBottom: 10 }}>
      <View style={{ flexDirection: isSender ? "row-reverse" : "row" }}>
        <View style={[styles.messageContainer, { backgroundColor: bg }]}>
          <CustomText
            fontSize={13}
            label={item?.message}
            color={!isSender ? "#000" : "#fff"}
          />
          <CustomText
            fontSize={10}
            marginTop={5}
            alignSelf={"flex-end"}
            label={formatTime(item?.createdAt)}
            color={!isSender ? "#000" : "#fff"}
          />
        </View>
      </View>
    </View>
  );
};

export default ChatBubble;

const styles = StyleSheet.create({
  messageContainer: {
    maxWidth: "70%",
    borderRadius: 6,
    justifyContent: "center",
    padding: 10,
  },
});
