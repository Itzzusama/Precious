import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScreenWrapper } from "../../../components";
import Header from "../../../components/Header";
import ProductListCard from "../../../components/Collection/ProducListCard";
import { Images } from "../../../assets/images";

const OrderPage = () => {
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
  return (
    <ScreenWrapper
      scrollEnabled
      paddingHorizontal={15}
      headerUnScrollable={() => <Header name="Order Page" profile />}
    >
      <FlatList
        data={items}
        renderItem={({ item, index }) => <ProductListCard key={index} item={item} />}
      />
    </ScreenWrapper>
  );
};

export default OrderPage;

const styles = StyleSheet.create({});
