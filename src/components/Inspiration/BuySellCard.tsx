import { StyleSheet, View, ImageSourcePropType } from "react-native";
import React from "react";
import ImageFast from "../ImageFast";
import CustomText from "../CustomText";
import fonts from "../../assets/fonts";
import { Images } from "../../assets/images";

interface EventItem {
  image: ImageSourcePropType;
  date: string;
  title: string;
}

interface BuySellCardProps {
  item: EventItem;
}

const BuySellCard: React.FC<BuySellCardProps> = ({ item }) => (
  <View style={styles.buySellCard}>
    <ImageFast source={item.image} style={styles.buySellImage} />
    <View style={styles.buySellOverlay}>
      <ImageFast source={Images.eventLogo} style={styles.logo} />
      <CustomText
        label={item.date}
        fontSize={14}
        color="#fff"
        fontFamily={fonts.semiBold}
        marginTop={10}
      />
      <CustomText
        label={item.title}
        fontSize={14}
        color="#fff"
        fontFamily={fonts.semiBold}
      />
    </View>
  </View>
);

export default BuySellCard;

const styles = StyleSheet.create({
  buySellCard: {
    width: 140,
    height: 140,
    borderRadius: 16,
    marginRight: 12,
    overflow: "hidden",
    backgroundColor: "#222",
  },
  buySellImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 16,
  },
  buySellOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.30)",
    height: "100%",
  },
  logo: {
    height: 30,
    width: 30,
    borderRadius: 99,
  },
});
