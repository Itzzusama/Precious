import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Images } from "../../assets/images";
import ImageFast from "../ImageFast";
import CustomText from "../CustomText";
import Icons from "../Icons";
import { Colors } from "../../config/colors";
import fonts from "../../assets/fonts";
import CustomButton from "../CustomButton";

const UserCard = () => {
  return (
    <>
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
    </>
  );
};

export default UserCard;

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
    marginVertical: 14,
    paddingHorizontal: 20,
  },
});
