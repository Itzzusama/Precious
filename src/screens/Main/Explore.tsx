import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Images } from "../../assets/images";
import { ScreenWrapper } from "../../components";
import FilterButtons from "../../components/explore/FilterButtons";
import Post from "../../components/explore/Post";
import ProductCard from "../../components/explore/ProductCard";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

const Explore = () => {
  const navigation = useNavigation();
  return (
    <ScreenWrapper paddingHorizontal={0.1}>
      <Header isBack={false} />
      <FilterButtons paddingLeft={10} />
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
      <Post  />
      <Post />
    </ScreenWrapper>
  );
};

export default Explore;

const styles = StyleSheet.create({
  contentStyle: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
});
