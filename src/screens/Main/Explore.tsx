import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { CustomText, ScreenWrapper } from "../../components";
import Post from "../../components/explore/Post";
import ProductCard from "../../components/explore/ProductCard";
import { Images } from "../../assets/images";
import FilterButtons from "../../components/explore/FilterButtons";
import Header from "../../components/Header";

const Explore = () => {
  return (
    <ScreenWrapper paddingHorizontal={0.1} scrollEnabled>
      <Header />
      <FilterButtons />
      <Post />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentStyle}
        data={[1, 2, 3, 4]}
        renderItem={() => (
          <ProductCard
            title="Watches"
            brand="CARTIERS"
            price="1400"
            image={Images.product}
            onWishlistPress={() => console.log("Wishlist pressed")}
          />
        )}
      />
      <Post />
      <Post />
    </ScreenWrapper>
  );
};

export default Explore;

const styles = StyleSheet.create({
  contentStyle: {
    paddingHorizontal: 20,
    marginVertical: 30,
  },
});
