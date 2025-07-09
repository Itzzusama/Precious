import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScreenWrapper } from "../../components";
import Header from "../../components/Header";
import PlanCard from "../../components/PlanCard";

const plans = [
  {
    id: "free",
    title: "Free Plan",
    price: "Free",
    features: [
      "Make a collection of your assets",
      "100 items with automatic background removal",
      "Connect and share",
      "Create a network and get inspired by others",
      "Send messages to friends and others",
    ],
  },
  {
    id: "standard",
    title: "Standard",
    price: "$19 / MONTH",
    features: [
      "Everything in free",
      "Unlimited items with automatic background removal",
      "Notifications about new deals or price changes for your wish list",
      "See the availability of your wish list in your network",
      "Get news feed from brands and other members and post to it",
      "Develop a network of your favorite brands and other people in your league of luxury collection",
    ],
  },
  {
    id: "premium",
    title: "Premium",
    price: "$28 / MONTH",
    features: [
      "Everything in Free and Premium",
      "Exclusive connection to experts",
      "Priority access to virtual and IRL events",
    ],
  },
  {
    id: "vip_deluxe",
    title: "VIP Deluxe",
    price: "$36 / MONTH",
    features: [
      "Everything in the other plans",
      "Let your items digitized for you",
      "Access 1:1 personal styling services",
      "Invitations for selected events worldwide like fashionshows or openings",
    ],
  },
];

const Subscription = () => {
  return (
    <ScreenWrapper
      headerUnScrollable={() => (
        <Header profile name="Subscription" icons={false} />
      )}
    >
      <FlatList
        data={plans}
        contentContainerStyle={{ marginBottom: 20 }}
        renderItem={({ item }) => <PlanCard plan={item} onSelect={() => ""} />}
      />
    </ScreenWrapper>
  );
};

export default Subscription;

const styles = StyleSheet.create({});
