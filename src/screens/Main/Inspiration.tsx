import React, { useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { CustomText, Icons, ScreenWrapper } from "../../components";
import Header from "../../components/Header";
import TopTab from "../../components/TopTab";
import fonts from "../../assets/fonts";
import { Images } from "../../assets/images";
import ProductGridCard from "../../components/Collection/ProductGridCard";
import ProductListCard from "../../components/Collection/ProducListCard";
import FilterModal from "../../Modals/FilterModal";
import ImageFast from "../../components/ImageFast";
import TrendCard from "../../components/Inspiration/TrendCard";
import BuySellCard from "../../components/Inspiration/BuySellCard";
import EventCard from "../../components/Inspiration/EventCard";



const events = [
  {
    image: Images.event1,
    logo: Images.eventLogo,
    date: "Thu, 01.MAI",
    time: "9:00PM",
    title: "FLAGSHIP OPENING",
    subtitle: "MADRID",
    badge: "GUCCI",
  },
  {
    image: Images.event2,
    logo: Images.eventLogo,
    date: "Thu, 01.MAI",
    time: "10:00PM",
    title: "WELCOME THE SEASON MEMBER MIXER",
    subtitle: "SALON MARMOT PARIS",
    badge: "BEST OF EDITION",
  },
];

const buyingSelling = [
  {
    image: Images.product,
    logo: Images.profile,
    date: "03.June · 9:00PM",
    title: "Online Auction",
    badge: "XR",
  },
  {
    image: Images.product,
    logo: Images.profile,
    date: "18.Mai · 4:00PM",
    title: "Art Gallery East",
    badge: "H",
  },
  {
    image: Images.product,
    logo: Images.profile,
    date: "23.APRIL · 4:00PM",
    title: "CELINE Collection",
    badge: "CELINE",
  },
];

const trends = [
  {
    image: Images.trend1,
    date: "12.April | NEWS",
    title: "New Edition John Lennon's Patek Philipp...",
  },
  {
    image: Images.trend2,
    date: "09.April | VINTAGE",
    title: "THE OMEGA 'FI...",
  },
];

type EventItem = {
  image: number;
  logo?: number;
  date: string;
  time?: string;
  title: string;
  subtitle?: string;
  badge?: string;
};

type TrendItem = {
  image: number;
  date: string;
  title: string;
};

// Card components

const Inspiration = () => {
  const [tab, setTab] = useState("Recommended for You");
  const [gridView, setGridView] = useState(true);
  const [filterModal, setFilterModal] = useState(false);

  return (
    <ScreenWrapper
      headerUnScrollable={() => <Header isBack={false} />}
      paddingHorizontal={10}
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
          tabNames={["Recommended for You", "All"]}
        />

        <TouchableOpacity
          style={[styles.row, { alignSelf: "flex-end" }]}
          onPress={() => setGridView(!gridView)}
        >
          <CustomText label="SORT BY" fontFamily={fonts.semiBold} />
          <Icons
            family="MaterialCommunityIcons"
            name="view-grid-outline"
            size={18}
          />
        </TouchableOpacity>
      </View>

      {/* EVENTS SECTION */}
      <CustomText
        label="EVENTS"
        fontFamily={fonts.bold}
        fontSize={15}
        marginTop={18}
        marginBottom={8}
      />
      <FlatList
        data={events}
        renderItem={({ item }) => <EventCard item={item} />}
        keyExtractor={(_, idx) => `event-${idx}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 12, paddingRight: 4 }}
      />
      {/* BUYING & SELLING SECTION */}
      <CustomText
        label="BUYING & SELLING"
        fontFamily={fonts.bold}
        fontSize={15}
        marginTop={18}
        marginBottom={8}
      />
      <FlatList
        data={buyingSelling}
        renderItem={({ item }) => <BuySellCard item={item} />}
        keyExtractor={(_, idx) => `buy-${idx}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 12, paddingRight: 4 }}
      />
      {/* RECENT TRENDS SECTION */}
      <CustomText
        label="RECENT TRENDS"
        fontFamily={fonts.bold}
        fontSize={15}
        marginTop={18}
        marginBottom={8}
      />
      <FlatList
        data={trends}
        renderItem={({ item }) => <TrendCard item={item} />}
        keyExtractor={(_, idx) => `trend-${idx}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 12, paddingRight: 4 }}
      />
    </ScreenWrapper>
  );
};

export default Inspiration;

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
    borderBottomWidth: 1,
    paddingBottom: 15,
    borderBottomColor: "#D1D1D6",
  },
  custom: {
    paddingBottom: 0,
    borderBottomWidth: 0,
    marginBottom: 15,
  },
});
