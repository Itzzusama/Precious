import React, { useRef } from "react";
import { Animated, Dimensions, FlatList, StyleSheet, View } from "react-native";
import ImageFast from "../ImageFast";

const { width } = Dimensions.get("window");

type PostBodyProps = {
  images: number[]; // local images
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
};

const PostBody: React.FC<PostBodyProps> = ({ images, setCurrentIndex }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <FlatList
      data={images}
      renderItem={({ item }) => (
        <ImageFast source={item} style={styles.image} resizeMode="contain" />
      )}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      pagingEnabled
      scrollEnabled
      nestedScrollEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewConfig}
    />
  );
};

export default PostBody;

const styles = StyleSheet.create({
  image: {
    width,
    height: 500,
  },
});
