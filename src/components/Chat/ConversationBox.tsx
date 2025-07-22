import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import fonts from "../../assets/fonts";
import { Colors } from "../../config/colors";
import { RootStackParamList } from "../../navigation/types";
import CustomText from "../CustomText";
import ImageFast from "../ImageFast";
import { Message } from "../../types/interfaces"; // Make sure this file exists

type CardProps = {
  item: Message; // Assuming Message is the type for the conversation item
};

const ConversationBox: React.FC<CardProps> = ({ item }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.7}
      onPress={() => navigation.navigate("ChatScreen")}
    >
      <ImageFast source={item.image} style={styles.avatar} />
      <View style={styles.textBox}>
        <View style={styles.row}>
          <CustomText
            fontSize={17}
            label={item.name}
            fontFamily={fonts.medium}
          />
          <CustomText
            fontSize={12}
            label={item.timeAgo}
            color={Colors.GREY2}
            fontFamily={fonts.medium}
          />
        </View>
        <CustomText
          color={Colors.GREY}
          label={item.message}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ConversationBox;

const styles = StyleSheet.create({
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 100,
  },
  card: {
    flexDirection: "row",
    paddingTop: 10,
  },
  textBox: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHT_GREY,
    flex: 1,
    marginLeft: 10,
    paddingBottom: 13,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
