import { View, Text, StyleSheet, Switch } from "react-native";
import React, { useState } from "react";
import { ScreenWrapper } from "../../components";
import Header from "../../components/Header";
import TopCard from "../../components/Profile/TopCard";
import CustomText from "../../components/CustomText";
import Icons from "../../components/Icons";
import { Colors } from "../../config/colors";
import fonts from "../../assets/fonts";
import SectionListCard from "../../components/Profile/SectionListCard";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import ProfileLogoutModal from "../../Modals/ProfileLogoutModal";
import { RootStackParamList } from "../../navigation/types";

const sections = [
  {
    title: "Account",
    items: [
      { label: "Your Subscription Plan", screen: "Subscription" },
      { label: "Public Profile", switch: true },
      { label: "Allow Friends Request", switch: true },
      { label: "Share your wish list with brands", switch: true },
    ],
  },
  {
    title: "My Collection",
    items: [{ label: "Items Published" }, { label: "Saved Items" }],
  },
  {
    title: "My Sales",
    items: [
      { label: "Completed" },
      { label: "In Process" },
      { label: "Get Paid" },
    ],
  },
  {
    title: "My Orders",
    items: [{ label: "Completed" }, { label: "In Process" }],
  },
  {
    title: "Activities",
    items: [
      { label: "Community" },
      { label: "Alerts" },
      { label: "Price Negotiation" },
    ],
  },
  {
    title: "Service",
    items: [
      { label: "How it works" },
      { label: "Expert Authentification" },
      { label: "Quality Control" },
      { label: "Earn your VIP status" },
      { label: "Delivery & Returns" },
      { label: "FAQ" },
      { label: "Privacy Policy" },
      { label: "Terms of Use" },
    ],
  },
];

const Profile = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [modalShow, setModalShow] = useState(false);
  return (
    <ScreenWrapper
      paddingHorizontal={0.1}
      headerUnScrollable={() => (
        <Header isBack onMorePress={() => setModalShow(true)} />
      )}
    >
      <View style={{ paddingHorizontal: 14 }}>
        <TopCard onProfilePress={() => navigation.navigate("ProfileSetting")} />
      </View>
      {/* Step Progress Card */}
      <View style={styles.progressCard}>
        <View style={styles.progressHeader}>
          <CustomText
            label="1 step left"
            fontFamily={fonts.bold}
            fontSize={16}
          />
          <Icons
            family="Feather"
            name="arrow-right"
            size={22}
            color={Colors.BLACK}
          />
        </View>
        <View style={styles.progressRow}>
          {/* Step 1 */}
          <View style={styles.progressStep}>
            <View style={styles.progressCircleFilled} />
            <CustomText
              label="Date of birth"
              fontSize={13}
              textAlign="center"
              marginTop={6}
            />
          </View>
          {/* Line */}
          <View style={styles.progressLine} />
          {/* Step 2 */}
          <View style={styles.progressStep}>
            <View style={styles.progressCircleFilled} />
            <CustomText
              label={"Photo and\ndescription"}
              fontSize={13}
              textAlign="center"
              marginTop={6}
            />
          </View>
          {/* Line */}
          <View style={styles.progressLine} />
          {/* Step 3 */}
          <View style={styles.progressStep}>
            <View style={styles.progressCircleEmpty} />
            <CustomText
              label={"Favorite\nbrands"}
              fontSize={13}
              textAlign="center"
              marginTop={6}
            />
          </View>
        </View>
      </View>
      {/* Alerts & Messages Cards */}
      <View style={styles.cardsRow}>
        <View style={styles.infoCard}>
          <View style={styles.iconRow}>
            <Icons
              family="Feather"
              name="bookmark"
              size={28}
              color={Colors.BLACK}
            />
            <View style={styles.redDot} />
          </View>
          <CustomText
            label="6 Alerts"
            fontFamily={fonts.semiBold}
            fontSize={18}
            marginTop={8}
          />
        </View>
        <View style={styles.infoCard}>
          <View style={styles.iconRow}>
            <Icons
              family="Feather"
              name="mail"
              size={28}
              color={Colors.BLACK}
            />
            <View style={styles.redDot} />
          </View>
          <CustomText
            label="31 Messages"
            fontFamily={fonts.semiBold}
            fontSize={18}
            marginTop={8}
          />
        </View>
      </View>
      {sections.map((section, idx) => (
        <SectionListCard
          key={section.title}
          title={section.title}
          items={section.items}
        />
      ))}

      <ProfileLogoutModal
        isVisible={modalShow}
        onDisable={() => setModalShow(false)}
      />
    </ScreenWrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({
  progressCard: {
    backgroundColor: Colors.LIGHT_GREY_WHITE,
    borderRadius: 14,
    padding: 16,
    marginBottom: 18,
    marginTop: 2,
    marginHorizontal: 14,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  progressRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginTop: 2,
  },
  progressStep: {
    alignItems: "center",
    width: 80,
  },
  progressCircleFilled: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.BLACK,
    borderWidth: 2,
    borderColor: Colors.BLACK,
  },
  progressCircleEmpty: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
    borderWidth: 2,
    borderColor: Colors.BLACK,
  },
  progressLine: {
    height: 2,
    backgroundColor: Colors.BLACK,
    alignSelf: "center",
    width: 32,
    marginTop: 9,
  },
  cardsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: Colors.LIGHT_GREY_WHITE,
    borderRadius: 14,
    alignItems: "center",
    paddingVertical: 20,
    width: "48%",
  },
  iconRow: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  redDot: {
    position: "absolute",
    top: 0,
    right: -8,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.RED,
    borderWidth: 2,
    borderColor: Colors.LIGHT_GREY_WHITE,
  },
});
