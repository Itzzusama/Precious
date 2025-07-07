import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { ScreenWrapper } from "../../components";
import Header from "../../components/Header";
import { Images } from "../../assets/images";
import CustomText from "../../components/CustomText";
import CustomButton from "../../components/CustomButton";
import ImageFast from "../../components/ImageFast";
import Icons from "../../components/Icons";
import fonts from "../../assets/fonts";
import { Colors } from "../../config/colors";

import ShoppingCard from "../../components/Connect/ShoppingCard";
import FilterModal from "../../Modals/FilterModal";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState<"items" | "forSale" | "posts">(
    "items"
  );
  const [filterModal, setFilterModal] = useState(false);
  const handleTabPress = (tab: "items" | "forSale" | "posts") => {
    setActiveTab(tab);
  };

  const items = [
    {
      image: Images.product,
      title: "Patek Philippe",
      subtitle: "Calatrava yellow gold…",
    },
    {
      image: Images.product,
      title: "GUCCI Shoes",
      subtitle: "Stilettos, Leather, red…",
    },
    {
      image: Images.product,
      title: "Patek Philippe",
      subtitle: "Calatrava yellow gold…",
    },
    {
      image: Images.product,
      title: "GUCCI Shoes",
      subtitle: "Stilettos, Leather, red…",
    },
    {
      image: Images.product,
      title: "Patek Philippe",
      subtitle: "Calatrava yellow gold…",
    },
    {
      image: Images.product,
      title: "GUCCI Shoes",
      subtitle: "Stilettos, Leather, red…",
    },
  ];

  return (
    <ScreenWrapper
      backgroundColor="white"
      scrollEnabled
      paddingHorizontal={0.1}
      headerUnScrollable={() => <Header isBack />}
    >
      <View style={styles.headerContainer}>
        {/* Avatar */}
        <ImageFast source={Images.model} style={styles.avatar} />
        {/* User Info */}
        <View style={styles.infoContainer}>
          <CustomText
            label="Elizabeth White"
            fontSize={22}
            fontFamily={fonts.bold}
            marginBottom={2}
          />
          <View style={styles.locationRow}>
            <Icons
              name="map-marker-outline"
              family="MaterialCommunityIcons"
              size={16}
              color={Colors.GREY}
            />
            <CustomText
              label="Los Angeles, California"
              fontSize={14}
              marginLeft={5}
            />
          </View>
          <CustomText
            label="A visionary designer and entrepreneur"
            fontSize={14}
            marginTop={2}
          />
        </View>
      </View>
      {/* Stats Row */}
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <CustomText
            label="57"
            fontSize={18}
            fontFamily={fonts.bold}
            textAlign="center"
          />
          <CustomText
            label="Items"
            fontSize={13}
            color={Colors.GREY}
            textAlign="center"
          />
        </View>
        <View style={styles.statItem}>
          <CustomText
            label="260"
            fontSize={18}
            fontFamily={fonts.bold}
            textAlign="center"
          />
          <CustomText
            label="Items sold"
            fontSize={13}
            color={Colors.GREY}
            textAlign="center"
          />
        </View>
        <View style={styles.statItem}>
          <CustomText
            label="260"
            fontSize={18}
            fontFamily={fonts.bold}
            textAlign="center"
          />
          <CustomText
            label="Follower"
            fontSize={13}
            color={Colors.GREY}
            textAlign="center"
          />
        </View>
        <View style={styles.statItem}>
          <CustomText
            label="260"
            fontSize={18}
            fontFamily={fonts.bold}
            textAlign="center"
          />
          <CustomText
            label="Following"
            fontSize={13}
            color={Colors.GREY}
            textAlign="center"
          />
        </View>
      </View>
      {/* Buttons Row */}
      <View style={styles.buttonsRow}>
        <CustomButton
          title="Follow"
          onPress={() => {}}
          width={"48%"}
          backgroundColor={Colors.GREY2}
          color={Colors.GREY}
          borderRadius={20}
          height={40}
          customText={{
            color: Colors.WHITE,
            fontFamily: fonts.semiBold,
            fontSize: 16,
          }}
        />
        <CustomButton
          title="Send a message"
          onPress={() => {}}
          width={"48%"}
          height={40}
          backgroundColor={Colors.TRANSPARENT}
          borderWidth={1}
          borderColor="gray"
          color={Colors.GREY}
          borderRadius={20}
          customText={{
            color: Colors.GREY,
            fontFamily: fonts.semiBold,
            fontSize: 16,
          }}
        />
      </View>
      {/* Tabs Row */}
      <View style={styles.tabsRow}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "items" && styles.tabButtonActive,
          ]}
          onPress={() => handleTabPress("items")}
        >
          <CustomText
            label="Items • 57"
            fontSize={16}
            color={activeTab === "items" ? Colors.WHITE : Colors.BLACK}
            fontFamily={fonts.semiBold}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "forSale" && styles.tabButtonActive,
          ]}
          onPress={() => handleTabPress("forSale")}
        >
          <CustomText
            label="For Sale"
            fontSize={16}
            color={activeTab === "forSale" ? Colors.WHITE : Colors.BLACK}
            fontFamily={fonts.semiBold}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "posts" && styles.tabButtonActive,
          ]}
          onPress={() => handleTabPress("posts")}
        >
          <CustomText
            label="Posts"
            fontSize={16}
            color={activeTab === "posts" ? Colors.WHITE : Colors.BLACK}
            fontFamily={fonts.semiBold}
          />
        </TouchableOpacity>
      </View>
      {/* Filter/Sort Row */}
      <View style={styles.filterSortRow}>
        <TouchableOpacity
          style={styles.filterRowLeft}
          onPress={() => setFilterModal(true)}
        >
          <Icons
            family="Feather"
            name="filter"
            size={18}
            color={Colors.BLACK}
          />
          <CustomText
            label="FILTER"
            fontSize={10}
            color={Colors.BLACK}
            fontFamily={fonts.bold}
            marginLeft={6}
          />
        </TouchableOpacity>
        <View style={styles.filterRowRight}>
          <CustomText
            label="SORT BY"
            fontSize={10}
            color={Colors.BLACK}
            marginRight={6}
            fontFamily={fonts.bold}
          />
          <Icons
            family="MaterialCommunityIcons"
            name="view-grid-outline"
            size={18}
            color={Colors.BLACK}
          />
        </View>
      </View>
      {/* Shopping Cards Grid */}

      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ShoppingCard
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            onStarPress={() => {}}
            onBookmarkPress={() => {}}
            forSale={activeTab === "forSale"}
            Post={activeTab === "posts"}
          />
        )}
        keyExtractor={(_, idx) => idx.toString()}
        numColumns={activeTab === "posts" ? 3 : 2}
        key={activeTab}
        showsVerticalScrollIndicator={false}
      />

      <FilterModal
        isVisible={filterModal}
        onDisable={() => setFilterModal(false)}
      />
    </ScreenWrapper>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 12,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 18,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
    marginBottom: 10,
  },
  statItem: {
    alignItems: "center",
    flex: 1,
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  tabsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  tabButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.BLACK,
    borderRadius: 25,
    paddingVertical: 6,
    alignItems: "center",
    marginHorizontal: 5,
    backgroundColor: Colors.WHITE,
  },
  tabButtonActive: {
    backgroundColor: Colors.BLACK,
    borderColor: Colors.BLACK,
  },
  filterSortRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    marginTop: 8,
    paddingHorizontal: 17,
  },
  filterRowLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  filterRowRight: {
    flexDirection: "row",
    alignItems: "center",
  },
});
