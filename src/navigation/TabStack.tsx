/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import fonts from "../assets/fonts";
import { Images } from "../assets/images";
import { Icons } from "../components";
import { Colors } from "../config/colors";
import Connect from "../screens/Main/Connect";
import Explore from "../screens/Main/Explore";
import Inspiration from "../screens/Main/Inspiration";
import Profile from "../screens/Main/Profile";
import { RootStackParamList } from "./types";

// screen

type TabIconProps = {
  source: any;
  focused: boolean;
};

const Tab = createBottomTabNavigator();

const TabIcon: React.FC<TabIconProps> = ({ source, focused }) => {
  return (
    <Image
      source={source}
      style={styles.tabIcon}
      tintColor={focused ? Colors.BLACK : Colors.GREY2}
    />
  );
};

const TabStack: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.BLACK,
        tabBarInactiveTintColor: Colors.GREY,
        tabBarStyle: styles.tabBarStyle as ViewStyle,
        tabBarLabelStyle: styles.labelStyle as TextStyle,
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={Images.explore} />
          ),
        }}
        name="Explore"
        component={Explore}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={Images.connect} />
          ),
        }}
        name="Connect"
        component={Connect}
      />
      <Tab.Screen
        component={View}
        name="My Collection"
        options={{
          tabBarIcon: () => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate("MyCollection")}
              style={styles.plusIcon}
            >
              <Icons
                size={22}
                name={"plus-a"}
                color={Colors.WHITE}
                family={"Fontisto"}
              />
            </TouchableOpacity>
          ),
          tabBarStyle: { display: "none" },
          tabBarLabelStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={Images.inspiration} />
          ),
        }}
        name="Inspiration"
        component={Inspiration}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={Images.profile} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default TabStack;

const styles = StyleSheet.create({
  icon: {
    height: 25,
    width: 25,
    resizeMode: "contain",
  },

  tabBarStyle: {
    height: 85,
    backgroundColor: Colors.WHITE,
    paddingTop: 8,
  },
  labelStyle: {
    fontFamily: fonts.medium,
    fontSize: 12,
    marginTop: 3,
  },
  plusIcon: {
    height: 46,
    width: 46,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
    backgroundColor: Colors.BLACK,
    borderRadius: 50,
    marginTop: 10,
  },
  tabIcon: {
    width: 30,
    height: 30,
  },
});
