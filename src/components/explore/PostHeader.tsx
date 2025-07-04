import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import CustomText from "../CustomText";
import ImageFast from "../ImageFast";
import Icons from "../Icons";
import fonts from "../../assets/fonts";

type HeaderProps = {
  user: any;
};

const PostHeader: React.FC<HeaderProps> = ({ user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <ImageFast source={user?.avatar} style={styles.avatar} />
        <CustomText
          fontSize={16}
          label={user?.name}
          fontFamily={fonts.medium}
        />
      </View>
      <TouchableOpacity>
        <Icons name="dots-three-horizontal" size={22} family="Entypo" />
      </TouchableOpacity>
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 10,
    paddingVertical: 12,
  },
  row1: {
    columnGap: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
});
