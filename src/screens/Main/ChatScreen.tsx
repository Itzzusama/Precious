import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  FlatList as FlatListType,
  StyleSheet,
  View,
} from "react-native";
import { Images } from "../../assets/images";
import { ScreenWrapper } from "../../components";
import ChatBubble from "../../components/Chat/ChatBubble";
import ChatFooter from "../../components/Chat/ChatFooter";
import ChatHeader from "../../components/Chat/ChatHeader";

type MessageType = {
  createdAt: Date;
  name: string;
  sender: number;
  message: string;
};

const ChatScreen: React.FC = () => {
  const flatListRef = useRef<FlatListType<MessageType>>(null);

  const [inputText, setInputText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<MessageType[]>([]);

  const sendMsg = async () => {
    try {
      const tempMessage: MessageType = {
        createdAt: new Date(),
        name: "Tayyab",
        sender: 1,
        message: inputText,
      };

      setMessages((prevMessages) => [tempMessage, ...prevMessages]);
      setInputText("");

      flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
    } catch (error) {
      console.log("error in send message", error);
    }
  };

  return (
    <ScreenWrapper
      paddingHorizontal={10}
      headerUnScrollable={() => (
        <ChatHeader source={Images.user} title="Precious User" />
      )}
      footerUnScrollable={() => (
        <ChatFooter
          setInputText={setInputText}
          sendMessage={sendMsg}
          inputText={inputText}
        />
      )}
    >
      {loading ? (
        <View style={styles.container}>
          <ActivityIndicator size={45} color="#000" />
        </View>
      ) : (
        <FlatList
          inverted
          ref={flatListRef}
          data={messages}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
          initialNumToRender={20}
          renderItem={({ item }) => {
            const sender = true;
            return <ChatBubble item={item} isSender={sender} />;
          }}
          keyExtractor={(_, i) => i.toString()}
        />
      )}
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChatScreen;
