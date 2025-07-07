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

const ProductListCard: React.FC<cardProps> = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      <ImageFast
        source={item?.image}
        resizeMode="contain"
        style={styles.cardImage}
      />
      <View style={{ flex: 1 }}>
        <View style={styles.row1}>
          <CustomText
            fontSize={17}
            numberOfLines={1}
            label={item?.title}
            fontFamily={fonts.medium}
          />
          <ImageFast
            source={Images.badge}
            style={styles.badge}
            resizeMode="contain"
          />
        </View>
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
          <View style={styles.row}>
            <CustomText label="New Price" color={Colors.GREY2} />
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
          <CustomText label={item?.price} fontFamily={fonts.semiBold} />
        </View>
      </View>
    </View>
  );
};

export default ProductListCard;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#D1D1D6",
    backgroundColor: Colors.WHITE,
    flexDirection: "row",
    alignItems: "center",
  },
  cardImage: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginRight: 10,
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
