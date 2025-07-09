import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {
  CustomButton,
  CustomText,
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

const DetailPage = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    pictures: true,
    basic: true,
    desc: true,
    auth: true,
    insurance: true,
  });

  return (
    <ScreenWrapper translucent paddingHorizontal={0.1}>
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
});
