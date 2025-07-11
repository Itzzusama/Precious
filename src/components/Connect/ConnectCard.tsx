import React from "react";
import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import fonts from "../../assets/fonts";
import { Images } from "../../assets/images";
import CustomButton from "../CustomButton";
import CustomText from "../CustomText";

interface Props {
  name: string;
  brandName: string;
  followers: number | string;
  imageUrl?: string;
  onCardPress?: (event: GestureResponderEvent) => void;
}

const ConnectCard: React.FC<Props> = ({
  name,
  brandName,
  followers,
  imageUrl,
  onCardPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onCardPress}
      style={styles.card}
    >
      <Image
        source={imageUrl ? { uri: imageUrl } : Images.user}
        style={styles.image}
      />

      {/* Middle: Text Info */}
      <View style={styles.infoContainer}>
        <CustomText
          textStyle={styles.name}
          label={name || "susann35"}
          fontFamily={fonts.bold}
        />
        <CustomText textStyle={styles.brand}>
          {brandName || "Fashionbrand"}
        </CustomText>
        <CustomText textStyle={styles.followers}>
          {followers || "400 Mio. Follower • 1000 Items"}{" "}
        </CustomText>
      </View>

      {/* Right: Yes Text */}
      <View style={styles.statusContainer}>
        <CustomButton
          title={"Follow"}
          width={"65%"}
          backgroundColor={"#D1D1D6"}
          borderColor={"#D1D1D6"}
          borderWidth={1}
          height={36}
          borderRadius={99}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ConnectCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    padding: 6,
  },
  image: {
    width: 54,
    height: 54,
    borderRadius: 27,
    marginRight: 12,
  },
  infoContainer: {
    justifyContent: "center",
    width: "50%",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  brand: {
    fontSize: 14,
    color: "#555",
  },
  followers: {
    fontSize: 12,
    color: "#888",
  },
  statusContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  status: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
});
