import { View, Text, StyleSheet, Switch } from "react-native";
import React from "react";
import { ImageFast, ScreenWrapper } from "../../components";
import Header from "../../components/Header";
import TopCard from "../../components/Profile/TopCard";
import CustomText from "../../components/CustomText";
import Icons from "../../components/Icons";
import { Colors } from "../../config/colors";
import fonts from "../../assets/fonts";
import SectionListCard from "../../components/Profile/SectionListCard";
import { Images } from "../../assets/images";
import { useNavigation } from "@react-navigation/native";

type SectionItem = {
  label: string;
  subLabel?: string;
  switch?: boolean;
  onSwitch?: (val: boolean) => void;
  disabled?: boolean;
};

type SectionListCardProps = {
  title: string;
  items: SectionItem[];
};

// Reusable SectionListCard component

// Section data
const sections = [
  {
    title: "My Details",
    items: [
      { label: "Personal Information" , screen:"PersonalInformation"},
      { label: "My Addresses" },
      { label: "My Bank Details" },
      { label: "Paying methods" },
      { label: "Country and Currency" },
    ],
  },
  {
    title: "Gender",
    items: [{ label: "Items Published" }, { label: "Saved Items" }],
  },
  {
    title: "Settings",
    items: [
      { label: "Push Notifications" },
      { label: "Email Notifications" },
      { label: "WhatsApp and SMS Notifications" },
    ],
  },
];

const ProfileSetting = () => {
  const navigation = useNavigation();
  return (
    <ScreenWrapper
      paddingHorizontal={14}
      headerUnScrollable={() => <Header isBack profile name="Lucy Watson" />}
    >
      <View style={styles.profileContainer}>
        <ImageFast source={Images.user} style={styles.profile} />
        <ImageFast source={Images.camera} style={styles.camera} />
      </View>

      {sections.map((section, idx) => (
        <SectionListCard
          key={section.title}
          title={section.title}
          items={section.items}
        />
      ))}
    </ScreenWrapper>
  );
};

export default ProfileSetting;

const styles = StyleSheet.create({
  profileContainer: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginVertical: 20,
  },
  profile: {
    height: 80,
    width: 80,
    borderRadius: 99,
  },
  camera: {
    position: "absolute",
    height: 40,
    width: 40,
    borderRadius: 99,
    top: 20,
    left: 20,
  },
});
