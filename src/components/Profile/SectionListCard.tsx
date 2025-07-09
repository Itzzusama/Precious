import { StyleSheet, Switch, TouchableOpacity, View } from "react-native";
import React from "react";
import Icons from "../Icons";
import { Colors } from "../../config/colors";
import CustomText from "../CustomText";
import fonts from "../../assets/fonts";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/types";

// Interfaces for props
interface SectionItem {
  label: string;
  subLabel?: string;
  screen?: string;
  switch?: boolean;
  onSwitch?: (value: boolean) => void;
}

interface SectionListCardProps {
  title: string;
  items: SectionItem[];
}

const SectionListCard: React.FC<SectionListCardProps> = ({ title, items }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={sectionStyles.sectionContainer}>
      <CustomText
        label={title}
        fontSize={18}
        marginBottom={8}
        fontFamily={fonts.medium}
      />
      {items?.map((item) => (
        <TouchableOpacity
          key={item.label}
          activeOpacity={0.6}
          style={[sectionStyles.row]}
          onPress={() =>
            item?.screen &&
            navigation.navigate(item?.screen as keyof RootStackParamList)
          }
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
};

export default SectionListCard;

const sectionStyles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: Colors.WHITE,
    paddingVertical: 4,
    borderBottomColor: Colors.LIGHT_GREY,
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  rowLeft: {
    flex: 1,
  },
});
