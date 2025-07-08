import { StyleSheet, Switch, TouchableOpacity, View } from "react-native";
import React from "react";
import Icons from "../Icons";
import { Colors } from "../../config/colors";
import CustomText from "../CustomText";
import fonts from "../../assets/fonts";

// Interfaces for props
interface SectionItem {
  label: string;
  subLabel?: string;
  switch?: boolean;
  onPress?: () => void;
  onSwitch?: (value: boolean) => void;
}

interface SectionListCardProps {
  title: string;
  items: SectionItem[];
}

const SectionListCard: React.FC<SectionListCardProps> = ({
  title,
  items,
  onPress,
}) => (
  <View style={sectionStyles.sectionContainer}>
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: Colors.LIGHT_GREY,
        marginBottom: 20,
      }}
    />
    <CustomText
      label={title}
      fontFamily={fonts.medium}
      fontSize={20}
      marginBottom={12}
    />
    {items?.map((item, idx) => (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.6}
        key={item.label}
        style={[
          sectionStyles.row,
          idx === items.length - 1 && { borderBottomWidth: 0 },
        ]}
      >
        <View style={sectionStyles.rowLeft}>
          <CustomText label={item.label} fontFamily={fonts.bold} />
          {item.subLabel && (
            <CustomText
              label={item.subLabel}
              fontSize={13}
              color={Colors.GREY}
              marginTop={2}
            />
          )}
        </View>
        {item.switch !== undefined ? (
          <Switch
            value={item.switch}
            onValueChange={item.onSwitch}
            trackColor={{ false: Colors.LIGHT_GREY, true: Colors.BLACK }}
            thumbColor={Colors.WHITE}
          />
        ) : (
          <Icons
            family="Feather"
            name="chevron-right"
            size={22}
            color={Colors.BLACK}
          />
        )}
      </TouchableOpacity>
    ))}
  </View>
);

export default SectionListCard;

const sectionStyles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: Colors.WHITE,
    borderRadius: 12,
    marginTop: 18,
    paddingVertical: 4,
    borderColor: Colors.LIGHT_GREY,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: Colors.LIGHT_GREY,
    paddingVertical: 14,
  },
  rowLeft: {
    flex: 1,
  },
});
