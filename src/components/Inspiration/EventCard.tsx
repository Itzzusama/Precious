import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import React from "react";
import ImageFast from "../ImageFast";
import CustomText from "../CustomText";
import fonts from "../../assets/fonts";
import { Images } from "../../assets/images";

interface EventItem {
  image: ImageSourcePropType;
  date: string;
  time: string;
  title: string;
  subtitle: string;
}

interface EventCardProps {
  item?: EventItem;
}

const EventCard: React.FC<EventCardProps> = ({ item }) => (
  <View style={styles.eventCard}>
    <ImageFast source={item.image} style={styles.eventImage} />
    <View style={styles.eventOverlay}>
      <View style={{ alignItems: "center" }}>
        <ImageFast source={Images.eventLogo} style={styles.eventLogo} />
        <CustomText
          label={item.date}
          fontSize={20}
          color="#fff"
          fontFamily={fonts.bold}
          marginTop={4}
        />
        <CustomText
          label={item.time}
          fontSize={16}
          color="#fff"
          fontFamily={fonts.regular}
          marginBottom={8}
        />
      </View>
      <View>
        <CustomText
          label={item.title}
          fontSize={12}
          color="#fff"
          fontFamily={fonts.semiBold}
          textAlign="center"
        />
        <CustomText
          label={item.subtitle}
          fontSize={12}
          color="#fff"
          fontFamily={fonts.semiBold}
          textAlign="center"
        />
      </View>
    </View>
  </View>
);

export default EventCard;

const styles = StyleSheet.create({
  eventCard: {
    width: 170,
    height: 215,
    borderRadius: 16,
    marginRight: 12,
    overflow: "hidden",
    backgroundColor: "#222",
  },
  eventImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 16,
  },
  eventLogo: {
    width: 30,
    height: 30,
  },
  eventOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 14,
    backgroundColor: "rgba(0,0,0,0.30)",
    height: "100%",
  },
});
