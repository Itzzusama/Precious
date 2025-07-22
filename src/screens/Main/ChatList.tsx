import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import fonts from "../../assets/fonts";
import { CustomText, ScreenWrapper } from "../../components";
import Header from "../../components/Header";
import TopTab from "../../components/TopTab";
import { Colors } from "../../config/colors";
import ConversationBox from "../../components/Chat/ConversationBox";
import { Images } from "../../assets/images";

const ChatList = () => {
  const [tab, setTab] = useState("Messages");
  const data = [
    {
      id: 1,
      name: "Michelle",
      message: "Hello, how are you?",
      image: Images.user,
    },
    {
      id: 2,
      name: "Alex",
      message: "Just checking in on you!",
      image: Images.user,
    },
    {
      id: 3,
      name: "Jordan",
      message: "Can we talk later today?",
      image: Images.user,
    },
    {
      id: 4,
      name: "Samantha",
      message: "Great job on the presentation!",
      image: Images.user,
    },
    {
      id: 5,
      name: "Liam",
      message: "Don't forget the meeting at 3 PM.",
      image: Images.user,
    },
  ];

  return (
    <ScreenWrapper headerUnScrollable={() => <Header isBack={false} />}>
      <TopTab tabNames={["Messages", "Alerts"]} tab={tab} setTab={setTab} />
      <View style={styles.row}>
        <CustomText
          label="4 unread"
          color={Colors.GREY2}
          fontFamily={fonts.semiBold}
        />
        <CustomText label="SORT BY" fontFamily={fonts.semiBold} />
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <ConversationBox item={item} />}
      />
    </ScreenWrapper>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
