import React, { useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { CustomText, Icons, ScreenWrapper } from "../../components";
import Header from "../../components/Header";
import TopTab from "../../components/TopTab";
import { Colors } from "../../config/colors";
import fonts from "../../assets/fonts";
import { Images } from "../../assets/images";
import ProductGridCard from "../../components/Collection/ProductGridCard";

const items = [
  {
    image: Images.product,
    title: "Patek Philippe",
    subtitle: "Calatrava yellow gold…",
    price: "$1500.00",
    newPrice: "$1700.00",
    increment: "10%",
  },
  {
    image: Images.product,
    title: "GUCCI Shoes",
    subtitle: "Stilettos, Leather, red…",
    price: "$500.00",
    newPrice: "$800.00",
    increment: "10%",
  },
  {
    image: Images.product,
    title: "Patek Philippe",
    subtitle: "Calatrava yellow gold…",
    price: "$2500.00",
    newPrice: "$1200.00",
    decrement: "55%",
  },
  {
    image: Images.product,
    title: "GUCCI Shoes",
    subtitle: "Stilettos, Leather, red…",
    price: "$900.00",
    newPrice: "$1100.00",
    increment: "10%",
  },
  {
    image: Images.product,
    title: "Patek Philippe",
    subtitle: "Calatrava yellow gold…",
    price: "$200.00",
    newPrice: "$300.00",
    increment: "10%",
  },
  {
    image: Images.product,
    title: "GUCCI Shoes",
    subtitle: "Stilettos, Leather, red…",
    price: "$1700.00",
    newPrice: "$1300.00",
    decrement: "15%",
  },
];

const MyCollection = () => {
  const [tab, setTab] = useState("Items • 57");
  return (
    <ScreenWrapper
      headerUnScrollable={() => <Header isBack={false} />}
      paddingHorizontal={0.1}
    >
      <View style={{ paddingHorizontal: 12 }}>
        <CustomText
          fontSize={20}
          marginTop={12}
          marginBottom={10}
          textAlign="center"
          label="My Collection - $353,760.00"
        />
        <TopTab
          tab={tab}
          setTab={setTab}
          tabNames={["Items • 57", "Wishlist"]}
        />
        <View style={styles.row1}>
          <TouchableOpacity style={styles.row}>
            <Icons family="Feather" name="filter" size={18} />
            <CustomText label="FILTER" fontFamily={fonts.semiBold} />
          </TouchableOpacity>
          <View style={styles.row}>
            <CustomText label="SORT BY" fontFamily={fonts.semiBold} />
            <Icons
              family="MaterialCommunityIcons"
              name="view-grid-outline"
              size={18}
            />
          </View>
        </View>
      </View>

      <FlatList
        data={items}
        numColumns={2}
        renderItem={({ item }) => <ProductGridCard item={item} />}
      />
    </ScreenWrapper>
  );
};

export default MyCollection;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 7,
  },
  row1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 15,
  },
});
