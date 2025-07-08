import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import fonts from "../../assets/fonts";
import { CustomText, ScreenWrapper } from "../../components";
import Header from "../../components/Header";
import TopTab from "../../components/TopTab";
import { Colors } from "../../config/colors";
import ConversationBox from "../../components/Chat/ConversationBox";

const ChatList = () => {
  const [tab, setTab] = useState("Messages");
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
        data={[1, 2, 3, 4]}
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
