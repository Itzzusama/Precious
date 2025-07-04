import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icons from "../Icons";
import CustomText from "../CustomText";
import fonts from "../../assets/fonts";
import { Colors } from "../../config/colors";

type PostFooterProps = {
  comments: number;
  currentIndex: number;
  total: number;
};

const PostFooter: React.FC<PostFooterProps> = ({
  comments,
  currentIndex,
  total,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.iconsRow}>
          <TouchableOpacity style={styles.row1}>
            <Icons family="Feather" name="bookmark" size={24} />
            <CustomText label="2" fontFamily={fonts.bold} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.row1}>
            <Icons family="Feather" name="message-circle" size={24} />
            <CustomText label="31" fontFamily={fonts.bold} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icons family="Feather" name="send" size={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.rightRow}>
          <View style={styles.dotsContainer}>
            {Array.from({ length: total }).map((_, i) => (
              <View
                key={i}
                style={[styles.dot, { opacity: i === currentIndex ? 1 : 0.3 }]}
              />
            ))}
          </View>
        </View>
      </View>
      <Text style={styles.caption}>
        <Text style={{ fontFamily: fonts.bold }}>tom_ </Text>
        What time do you confess your feelings? With a Cartier watch, the
        prominse of love.
      </Text>
      <CustomText fontSize={13} label={`View all ${comments} comments`} />
    </View>
  );
};

export default PostFooter;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  row1: {
    flexDirection: "row",
    columnGap: 3,
    alignItems: "center",
  },
  iconsRow: {
    flexDirection: "row",
    columnGap: 10,
  },
  rightRow: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 10,
    backgroundColor: "#333",
    marginHorizontal: 2,
  },
  caption: {
    fontSize: 16,
    marginTop: 15,
    color: Colors.BLACK,
    fontFamily: fonts.regular,
    marginBottom: 8,
  },
});
