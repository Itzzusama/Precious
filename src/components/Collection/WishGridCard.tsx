import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import fonts from "../../assets/fonts";
import { Images } from "../../assets/images";
import { Colors } from "../../config/colors";
import CustomText from "../CustomText";
import Icons from "../Icons";
import ImageFast from "../ImageFast";

type cardProps = {
  item: any;
};

const WishGridCard: React.FC<cardProps> = ({ item }) => {
  const [selected, setSelected] = useState(true);
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <ImageFast
          source={Images.badge}
          style={styles.badge}
          resizeMode="contain"
        />
        <TouchableOpacity onPress={() => setSelected(!selected)}>
          <Icons
            size={24}
            family={"Ionicons"}
            name={selected ? "bookmark" : "bookmark-outline"}
          />
        </TouchableOpacity>
      </View>
      <ImageFast
        source={item?.image}
        resizeMode="contain"
        style={styles.cardImage}
      />
      <CustomText
        fontSize={16}
        marginTop={10}
        numberOfLines={1}
        label={item?.title}
        fontFamily={fonts.medium}
      />
      <CustomText
        fontSize={14}
        marginBottom={4}
        numberOfLines={1}
        label={item?.subtitle}
      />

      <CustomText
        fontSize={16}
        label={item?.price}
        fontFamily={fonts.semiBold}
      />
      <CustomText
        color={Colors.RED}
        fontFamily={fonts.medium}
        label="6 available for sale"
      />
    </View>
  );
};

export default WishGridCard;

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
    height: 24,
    width: 26,
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
