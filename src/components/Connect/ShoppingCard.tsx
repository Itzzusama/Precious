import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Icons from "../Icons";
import ImageFast from "../ImageFast";
import CustomText from "../CustomText";
import { Colors } from "../../config/colors";
import fonts from "../../assets/fonts";
import { Images } from "../../assets/images";

type ShoppingCardProps = {
  image: number;
  title: string;
  subtitle: string;
  Price: string;
  Post?: boolean;
  forSale?: boolean;
  Country: string;
  onStarPress: () => void;
  onBookmarkPress: () => void;
};

const ShoppingCard: React.FC<ShoppingCardProps> = ({
  image,
  title,
  subtitle,
  Price,
  Country,
  Post,
  onStarPress,
  onBookmarkPress,
  forSale,
}) => {
  return (
    <>
      {Post ? (
        <View style={styles.Image}>
          <ImageFast
            isView
            source={Images.post}
            style={{ height: "100%", width: "100%" }}
          />
        </View>
      ) : (
        <View style={styles.cardContainer}>
          <View style={styles.cardHeader}>
            <TouchableOpacity onPress={onStarPress}>
              <Icons
                family="Feather"
                name="star"
                size={22}
                color={Colors.GREY}
              />
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
          <ImageFast
            source={image}
            style={styles.cardImage}
            resizeMode="contain"
          />
          <CustomText
            label={title}
            fontSize={18}
            fontFamily={fonts.bold}
            marginTop={10}
            numberOfLines={1}
          />
          <CustomText label={subtitle} fontSize={14} numberOfLines={1} />
          {forSale && (
            <>
              <CustomText
                label={Price || "$ 3000"}
                fontFamily={fonts.semiBold}
                marginTop={4}
              />
              <CustomText
                label={Country || "United States"}
                fontSize={12}
                color={Colors.GREY}
                numberOfLines={1}
              />
            </>
          )}
        </View>
      )}
    </>
  );
};

export default ShoppingCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: "#D1D1D6",
    padding: 12,
    minWidth: 160,
    maxWidth: "50%",
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
    alignSelf: "center",
  },
  Image: {
    height: 170,
    width: "33%",
    margin: 1,
  },
});
