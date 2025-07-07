import React from "react";
import { StyleSheet, View } from "react-native";
import fonts from "../../assets/fonts";
import { Images } from "../../assets/images";
import { Colors } from "../../config/colors";
import CustomText from "../CustomText";
import Icons from "../Icons";
import ImageFast from "../ImageFast";

type cardProps = {
  item: any;
};

const ProductGridCard: React.FC<cardProps> = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <ImageFast
          source={Images.badge}
          style={styles.badge}
          resizeMode="contain"
        />
        <View style={styles.row}>
          <Icons
            size={18}
            family="Feather"
            name={item?.increment ? "arrow-up" : "arrow-down"}
            color={item?.increment ? Colors.GREEN : Colors.RED}
          />
          <CustomText
            fontFamily={fonts.medium}
            label={item?.increment || item?.decrement}
            color={item?.increment ? Colors.GREEN : Colors.RED}
          />
        </View>
      </View>
      <ImageFast
        source={item?.image}
        resizeMode="contain"
        style={styles.cardImage}
      />
      <CustomText
        fontSize={17}
        marginTop={10}
        numberOfLines={1}
        label={item?.title}
        fontFamily={fonts.medium}
      />
      <CustomText
        fontSize={14}
        numberOfLines={1}
        marginBottom={8}
        label={item?.subtitle}
      />
      <View style={styles.row1}>
        <CustomText label="Since" color={Colors.GREY2} />
        <CustomText label={"03.2023"} fontFamily={fonts.semiBold} />
      </View>
      <View style={styles.row1}>
        <CustomText label="Price" color={Colors.GREY2} />
        <CustomText label={item?.price} fontFamily={fonts.semiBold} />
      </View>
      <View style={styles.row1}>
        <CustomText label="New Price" color={Colors.GREY2} />
        <CustomText label={item?.price} fontFamily={fonts.semiBold} />
      </View>
    </View>
  );
};

export default ProductGridCard;

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
  badge: {
    height: 21,
    width: 24,
  },
  row: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    columnGap: 2,
  },
  row1: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 4,
  },
});
