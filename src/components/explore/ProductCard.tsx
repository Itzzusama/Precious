import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import CustomText from "../CustomText";
import ImageFast from "../ImageFast";
import { Colors } from "../../config/colors";
import fonts from "../../assets/fonts";

type ProductCardProps = {
  image: number; // local image
  title: string;
  brand: string;
  price: string;
  onWishlistPress: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  brand,
  price,
  onWishlistPress,
}) => {
  return (
    <View style={styles.container}>
      <ImageFast source={image} style={styles.image} resizeMode="contain" />
      <CustomText label={title} marginTop={10} fontFamily={fonts.semiBold} />
      <CustomText label={brand} fontFamily={fonts.semiBold} />
      <CustomText
        fontSize={18}
        marginTop={5}
        label={`${price}$`}
        fontFamily={fonts.bold}
      />

      <TouchableOpacity style={styles.button} onPress={onWishlistPress}>
        <CustomText label="Wishlist" fontFamily={fonts.medium} />
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GREY6,
    padding: 20,
    alignItems: "center",
    width: 160,
    marginRight: 8,
  },
  image: {
    width: 80,
    height: 80,
  },
  button: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
    width: 115,
    paddingVertical: 9,
    justifyContent: "center",
    alignItems: "center",
  },
});
