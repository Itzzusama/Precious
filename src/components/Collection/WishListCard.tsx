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

const WishListCard: React.FC<cardProps> = ({ item }) => {
  const [selected, setSelected] = useState(true);

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
            fontSize={16}
            numberOfLines={1}
            label={item?.title}
            fontFamily={fonts.medium}
          />
          <View style={styles.row}>
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
        </View>
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
        <CustomText label="1 available for sale" color={Colors.RED} />
      </View>
    </View>
  );
};

export default WishListCard;

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
