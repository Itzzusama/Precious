import React from "react";
import { StyleSheet } from "react-native";
import { ScreenWrapper } from "../../components";
import Header from "../../components/Header";
import FilterButtons from "../../components/explore/FilterButtons";
import ConnectCard from "../../components/Connect/ConnectCard";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

// If you have a defined navigation type, replace `any` below with your own
type RootStackParamList = {
  UserProfile: undefined;
};

const Connect: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const data = [
    {
      id: "1",
      name: "Ali Khan",
      brandName: "BrandX",
      followers: 400,
      imageUrl: "", // add valid URL if needed
    },
    {
      id: "2",
      name: "Sara Ali",
      brandName: "BrandY",
      followers: 400,
      imageUrl: "",
    },
    {
      id: "3",
      name: "John Doe",
      brandName: "BrandZ",
      followers: 400,
      imageUrl: "",
    },
    {
      id: "4",
      name: "Amna Sheikh",
      brandName: "BrandA",
      followers: 400,
      imageUrl: "",
    },
    {
      id: "5",
      name: "Rizwan Ahmed",
      brandName: "BrandB",
      followers: 400,
      imageUrl: "",
    },
    {
      id: "6",
      name: "Hina Mir",
      brandName: "BrandC",
      followers: 400,
      imageUrl: "",
    },
  ];

  return (
    <ScreenWrapper
      scrollEnabled
      backgroundColor="white"
      paddingBottom={70}
      paddingHorizontal={12}
      headerUnScrollable={() => <Header />}
    >
      <FilterButtons />

      {data.map((item) => (
        <ConnectCard
          key={item.id}
          name={item.name}
          brandName={item.brandName}
          followers={item.followers}
          imageUrl={item.imageUrl}
          onCardPress={() => navigation.navigate("UserProfile")}
        />
      ))}
    </ScreenWrapper>
  );
};

export default Connect;

const styles = StyleSheet.create({});
