import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Icons from "../Icons";
import ImageFast from "../ImageFast";
import CustomText from "../CustomText";
import { Colors } from "../../config/colors";
import fonts from "../../assets/fonts";

type ShoppingCardProps = {
  image: number;
  title: string;
  subtitle: string;
  onStarPress: () => void;
  onBookmarkPress: () => void;
};

const ShoppingCard: React.FC<ShoppingCardProps> = ({
  image,
  title,
  subtitle,
  onStarPress,
  onBookmarkPress,
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <TouchableOpacity onPress={onStarPress}>
          <Icons family="Feather" name="star" size={22} color={Colors.GREY} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onBookmarkPress}>
          <Icons
            family="Feather"
            name="bookmark"
            size={22}
            color={Colors.GREY}
          />
        </TouchableOpacity>
      </View>
      <ImageFast source={image} style={styles.cardImage} resizeMode="contain" />
      <CustomText
        label={title}
        fontSize={18}
        fontFamily={fonts.semiBold}
        marginTop={10}
        numberOfLines={1}
      />
      <CustomText
        label={subtitle}
        fontSize={14}
        color={Colors.GREY}
        numberOfLines={1}
      />
    </View>
  );
};

export default ShoppingCard;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.LIGHT_GREY,
    borderRadius: 8,
    margin: 6,
    padding: 12,
    alignItems: "center",
    minWidth: 160,
    maxWidth: "48%",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 6,
  },
  cardImage: {
    width: 90,
    height: 90,
    marginBottom: 8,
  },
});
