import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import fonts from "../../assets/fonts";
import { Images } from "../../assets/images";
import { Colors } from "../../config/colors";
import { RootStackParamList } from "../../navigation/types";
import CustomText from "../CustomText";
import ImageFast from "../ImageFast";

type cardProps = {
  item: any;
};

const ConversationBox: React.FC<cardProps> = ({ item }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.7}
      onPress={() => navigation.navigate("ChatScreen")}
    >
      <ImageFast source={Images.user} style={styles.avatar} />
      <View style={styles.textBox}>
        <View style={styles.row}>
          <CustomText
            fontSize={17}
            label="Lauralaura"
            fontFamily={fonts.medium}
          />
          <CustomText
            fontSize={12}
            label="3 Hours"
            color={Colors.GREY2}
            fontFamily={fonts.medium}
          />
        </View>
        <CustomText
          color={Colors.GREY}
          label="Hi you, I like your style. Where did you did you get teh red GUCCI watch?"
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
