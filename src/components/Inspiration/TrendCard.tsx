import { StyleSheet, View, ImageSourcePropType } from "react-native";
import React from "react";
import ImageFast from "../ImageFast";
import CustomText from "../CustomText";
import fonts from "../../assets/fonts";
import { Colors } from "../../config/colors";

interface TrendItem {
  image: ImageSourcePropType;
  date?: string;
  title: string;
}

interface TrendCardProps {
  item: TrendItem;
}

const TrendCard: React.FC<TrendCardProps> = ({ item }) => (
  <View style={styles.trendCard}>
    <ImageFast source={item.image} style={styles.trendImage} />
    <View style={styles.bottomContainer}>
      <CustomText label={item?.date} fontSize={11} color={Colors.GREY} />
      <CustomText label={item.title} fontSize={16} fontFamily={fonts.semiBold} />
    </View>
  </View>
);

export default TrendCard;

const styles = StyleSheet.create({
  trendCard: {
    width: 260,
    marginRight: 12,
  },
  trendImage: {
    width: "100%",
    height: 170,
    borderRadius: 8,
  },
  bottomContainer: {
    padding: 12,
    paddingLeft:0,
    backgroundColor: Colors.WHITE,
  },
});
