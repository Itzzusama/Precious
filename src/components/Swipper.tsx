import React, { useRef, useState, useEffect } from "react";
import {
  Animated,
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ListRenderItemInfo,
} from "react-native";
import { Colors } from "../config/colors";

const { width } = Dimensions.get("window");

interface SwiperProps {
  images: string[];
}

const Swiper: React.FC<SwiperProps> = ({ images }) => {
  const flatListRef = useRef<FlatList<string> | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: currentIndex,
      });
    }
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <View>
      <Animated.FlatList
        ref={flatListRef}
        data={images}
        showsHorizontalScrollIndicator={false}
        horizontal
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        onScrollToIndexFailed={(info) => {
          console.error("Failed to scroll to index:", info.index);
          flatListRef.current?.scrollToIndex({
            index: info.index,
            animated: true,
          });
        }}
        onMomentumScrollEnd={(e: NativeSyntheticEvent<NativeScrollEvent>) => {
          const x = e.nativeEvent.contentOffset.x;
          setCurrentIndex(Math.round(x / width));
        }}
        initialScrollIndex={currentIndex}
        pagingEnabled
        renderItem={({ item }: ListRenderItemInfo<string>) => (
          <View style={styles.sliderItem}>
            <Animated.Image style={styles.image} source={{ uri: item }} />
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
      <View style={styles.dotContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  index === currentIndex ? Colors.PRIMARY : Colors.LIGHT_GREY,
                width:  8,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderItem: {
    width: width,
    height: 400,
    backgroundColor: Colors.WHITE,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  dot: {
    height: 8,
    marginHorizontal: 3,
    borderRadius: 100,
  },
  dotContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 8,
  },
});

export default Swiper;
