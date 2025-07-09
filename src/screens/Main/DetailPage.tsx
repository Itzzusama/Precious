import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import {
  CustomButton,
  CustomText,
  Icons,
  ImageFast,
  ScreenWrapper,
} from "../../components";
import Swiper from "../../components/Swipper";
import { Images } from "../../assets/images";
import { imageArray } from "../../config/utils";
import fonts from "../../assets/fonts";
import ItemDropDown from "../../components/DetailPage/ItemDropDown";
import { Colors } from "../../config/colors";
import Header from "../../components/Header";
import { BarChart } from "react-native-gifted-charts";
import UserCard from "../../components/DetailPage/UserCard";
import ProductListCard from "../../components/Collection/ProducListCard";
import ProductGridCard from "../../components/Collection/ProductGridCard";

const allPictures = [
  Images.product,
  Images.product,
  Images.product,
  Images.product,
  Images.product,
  Images.product,
  Images.product,
  Images.product,
  Images.product,
];
const pictureDates = [
  { date: "2024", image: Images.product },
  { date: "06.Dez", image: Images.product },
  { date: "20.Oct", image: Images.product },
  { date: "20.Jul", image: Images.product },
];
const basicInfo = [
  { label: "Section", value: "Woman" },
  { label: "Category", value: "Watch" },
  { label: "Brand", value: "Rolex" },
  { label: "Jewelry Material", value: "White Gold" },
  { label: "Size", value: "cm 15" },
  { label: "Color", value: "Silver" },
  { label: "Condition", value: "Excellent Condition" },
  { label: "Seller Details", value: "Private Seller" },
];
const description = `1990 Rolex Datejust men's watch\nModel: 16220\nSerial number: E308864\nThis classic Rolex watch is set in stainless steel.\nCase diameter 36 mm\nSilver dial with baton markers\nStainless steel Oyster bracelet for wrists up to 7.5 inches. Bracelet is tight and in very good condition.\nAutomatic movement`;

const valueHistoryData = [
  { value: 10000, label: "2012" },
  { value: 15000, label: "2013" },
  { value: 25000, label: "2014" },
  { value: 35000, label: "2015" },
  { value: 50000, label: "2016" },
  { value: 70000, label: "2017" },
  { value: 100000, label: "2018" },
  { value: 120000, label: "2019" },
  { value: 140000, label: "2020" },
  { value: 180000, label: "2021" },
  { value: 200000, label: "2022" },
  { value: 220000, label: "2023" },
  { value: 250000, label: "2024" },
  { value: 400000, label: "2025" },
];

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
 
];

const DetailPage = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    pictures: true,
    basic: true,
    desc: true,
    auth: true,
    insurance: true,
  });

  return (
    <ScreenWrapper translucent paddingHorizontal={0.1} paddingBottom={16}>
      {/* <View style={{position: "absolute",zIndex:999, backgroundColor:'transparent'}}>
        <Header />
        </View> */}
      <Swiper images={imageArray} />
      <View style={styles.mainConatiner}>
        <CustomText
          label="Rolex Datejust"
          fontFamily={fonts.semiBold}
          fontSize={22}
        />
        <CustomText
          label="Cosmograph Daytona"
          fontSize={17}
          marginBottom={10}
        />
        <CustomText label="$2493" fontFamily={fonts.semiBold} fontSize={20} />
        <CustomText
          label="$5000"
          color={Colors.RED}
          textDecorationLine="line-through"
        />
        <CustomText
          label="Delivery within 10 Days"
          color={Colors.GREY}
          fontSize={12}
          marginBottom={14}
        />
        <CustomButton title="Make an Offer" />
        {/* All Pictures Section */}
        <ItemDropDown title="All Pictures">
          {openSections.pictures && (
            <>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginBottom: 10 }}
              >
                {allPictures.map((img, idx) => (
                  <Image
                    key={idx}
                    source={img}
                    style={styles.thumb}
                    resizeMode="cover"
                  />
                ))}
              </ScrollView>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {pictureDates.map((item, idx) => (
                  <View key={idx} style={styles.dateCard}>
                    <ImageFast source={item.image} style={styles.dateImage} />
                    <View style={styles.dateOverlay}>
                      <CustomText
                        label={item.date}
                        color="#fff"
                        fontFamily={fonts.bold}
                        fontSize={18}
                      />
                    </View>
                  </View>
                ))}
              </ScrollView>
            </>
          )}
        </ItemDropDown>
        {/* Basic Info Section */}
        <ItemDropDown title="Basic Info">
          {openSections.basic && (
            <View style={styles.infoTable}>
              {basicInfo.map((item, idx) => (
                <View key={item.label} style={styles.infoRow}>
                  <View style={{ flex: 1 }}>
                    <CustomText
                      label={item.label}
                      color={Colors.GREY}
                      fontSize={15}
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <CustomText
                      label={item.value}
                      fontSize={15}
                      textAlign="right"
                    />
                  </View>
                </View>
              ))}
            </View>
          )}
        </ItemDropDown>
        {/* Description Section */}
        <ItemDropDown title="Description">
          {openSections.desc && (
            <CustomText
              label={description}
              fontSize={15}
              marginTop={8}
              lineHeight={22}
            />
          )}
        </ItemDropDown>
        {/* Authentication Section */}

        <ItemDropDown title="Authentification">
          {openSections.auth && (
            <View style={{ marginTop: 8 }}>
              <CustomButton
                title="Get your Authentification"
                backgroundColor="black"
                borderRadius={3}
              />
              <CustomText
                label="Authentication process is done via AI services as well as serial number checks provided by manufacturer"
                color={Colors.GREY}
                fontSize={13}
                marginTop={10}
                textAlign="center"
              />
            </View>
          )}
        </ItemDropDown>
        <ItemDropDown title="Insurance">
          {openSections.auth && (
            <View style={{ marginTop: 8 }}>
              <CustomButton
                title="Get Insurance Quotes "
                backgroundColor="black"
                borderRadius={3}
              />
              <CustomText
                label="Authentication process is done via AI services as well as serial number checks provided by manufacturer"
                color={Colors.GREY}
                fontSize={13}
                marginTop={10}
                textAlign="center"
              />
            </View>
          )}
        </ItemDropDown>
        {/* Value History Section */}
        <ItemDropDown title="Value History">
          <View style={{ marginTop: 8, alignItems: "center", width: "100%" }}>
            <BarChart
              data={valueHistoryData}
              barWidth={16}
              barBorderRadius={4}
              frontColor="#888"
              yAxisThickness={1}
              xAxisThickness={0}
              yAxisTextStyle={{ color: "#888", fontSize: 11 }}
              xAxisLabelTextStyle={{
                color: "#888",
                fontSize: 11,
                marginTop: 4,
              }}
              yAxisLabelWidth={70}
              yAxisLabelTexts={[
                "$0",
                "$50,000.00",
                "$100,000.00",
                "$150,000.00",
                "$200,000.00",
                "$250,000.00",
                "$300,000.00",
                "$350,000.00",
                "$400,000.00",
              ]}
              maxValue={400000}
              stepValue={50000}
              noOfSections={8}
              spacing={12}
              hideRules
              xAxisColor="#fff"
              yAxisColor="#eee"
              yAxisTextNumberOfLines={1}
              showYAxisIndices={false}
              showFractionalValues
              xAxisTextNumberOfLines={1}
              height={220}
              width={340}
              initialSpacing={20}
              disableScroll={false}
              showVerticalLines={false}
            />
          </View>
        </ItemDropDown>

        <UserCard />

        <View style={styles.infoRow}>
          <CustomText
            label="More from this Seller"
            fontSize={20}
            fontFamily={fonts.semiBold}
          />
          <Icons name="arrow-forward" family="Ionicons" />
        </View>

        <FlatList
          data={items}
          numColumns={2}
          renderItem={({ item }) => <ProductGridCard item={item} />}
        />
      </View>
    </ScreenWrapper>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  mainConatiner: {
    paddingHorizontal: 12,
  },
  thumb: {
    width: 54,
    height: 54,
    borderRadius: 8,
    marginRight: 8,
  },
  dateCard: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginRight: 12,
    overflow: "hidden",
    backgroundColor: "#222",
  },
  dateImage: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
    position: "absolute",
  },
  dateOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.30)",
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 12,
  },
  infoTable: {
    marginTop: 8,
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
  },
  valueChart: {
    width: "100%",
    height: 200,
    marginTop: 8,
  },
});
