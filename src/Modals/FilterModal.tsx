import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import { CustomText, CustomModal, CustomButton, Icons } from "../components";

import { Colors } from "../config/colors";
import fonts from "../assets/fonts";
import CustomDropdown from "../components/CustomDropDown";

const sortOptions = [
  "New Arrival First",
  "Price Low to High",
  "Price High to Low",
];

const filterOptions = [
  { label: "Categories", data: ["Categories", "Watches", "Shoes", "Bags"] },
  { label: "Brands", data: ["Brands", "Gucci", "Rolex", "LV"] },
  { label: "Size", data: ["Size", "S", "M", "L", "XL"] },
  { label: "Product Condition", data: ["Product Condition", "New", "Used"] },
  {
    label: "Price Range",
    data: ["Price Range", "$0-$100", "$100-$500", "$500+"],
  },
  { label: "Model", data: ["Model", "2024", "2023", "2022"] },
  { label: "Seller Type", data: ["Seller Type", "Individual", "Store"] },
];

type FilterModalProps = {
  isVisible?: boolean;
  onDisable?: () => void;
  onPress?: () => void;
  loading?: boolean;
};

type DropdownValues = {
  [key: string]: string;
};

const FilterModal: React.FC<FilterModalProps> = ({
  isVisible,
  onDisable,
  onPress,
  loading,
}) => {
  const [selectedSort, setSelectedSort] = useState<string>(sortOptions[0]);
  const [dropdownValues, setDropdownValues] = useState<DropdownValues>({});
  const [vintage, setVintage] = useState(false);
  const [sale, setSale] = useState(false);
  const [newSeason, setNewSeason] = useState(false);

  const handleDropdown = (label: string, value: string) => {
    setDropdownValues((prev) => ({ ...prev, [label]: value }));
  };

  const handleReset = () => {
    setSelectedSort(sortOptions[0]);
    setDropdownValues({});
    setVintage(false);
    setSale(false);
    setNewSeason(false);
  };

  return (
    <CustomModal
      backdropOpacity={0.8}
      isVisible={isVisible}
      onDisable={onDisable}
    >
      <View style={[styles.mainContainer]}>
        <CustomText
          label="Filter"
          fontFamily={fonts.bold}
          fontSize={18}
          marginBottom={25}
        />
        <View style={styles.line} />

        <CustomText
          alignSelf="flex-end"
          label="Reset all"
          onPress={handleReset}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <CustomText
            label="Sort by"
            fontFamily={fonts.bold}
            fontSize={22}
            marginBottom={10}
          />
          {sortOptions.map((option) => (
            <TouchableOpacity
              key={option}
              style={styles.radioRow}
              onPress={() => setSelectedSort(option)}
              activeOpacity={0.7}
            >
              <CustomText
                label={option}
                fontFamily={
                  selectedSort === option ? fonts.bold : fonts.regular
                }
                fontSize={16}
                color={Colors.BLACK}
              />

              <Icons
                family="MaterialCommunityIcons"
                name={
                  selectedSort === option ? "radiobox-marked" : "radiobox-blank"
                }
                size={22}
                color={
                  selectedSort === option
                    ? Colors.BLACK
                    : Colors.LIGHT_GREY_DARK
                }
              />
            </TouchableOpacity>
          ))}

          <CustomText
            label="Filters"
            fontFamily={fonts.bold}
            fontSize={22}
            marginTop={18}
            marginBottom={10}
          />
          {filterOptions.map((filter) => (
            <View key={filter.label}>
              <CustomDropdown
                data={filter.data}
                value={dropdownValues[filter.label] || filter.data[0]}
                setValue={(val: string) => handleDropdown(filter.label, val)}
                placeholder={filter.label}
                paddingHorizontal={0.1}
                height={25}
              />
            </View>
          ))}

          <View
            style={[
              styles.toggleRow,
              {
                marginTop: 30,
              },
            ]}
          >
            <CustomText
              label="Vintage"
              fontFamily={fonts.semiBold}
              fontSize={18}
            />
            <TouchableOpacity
              style={styles.toggleBtn}
              onPress={() => setVintage((v) => !v)}
              activeOpacity={0.7}
            >
              <Icons
                family="MaterialCommunityIcons"
                name={vintage ? "toggle-switch" : "toggle-switch-off-outline"}
                size={45}
                color={vintage ? Colors.BLACK : Colors.GREY}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.toggleRow}>
            <CustomText
              label="Sale"
              fontFamily={fonts.semiBold}
              fontSize={18}
            />
            <TouchableOpacity
              style={styles.toggleBtn}
              onPress={() => setSale((v) => !v)}
              activeOpacity={0.7}
            >
              <Icons
                family="MaterialCommunityIcons"
                name={sale ? "toggle-switch" : "toggle-switch-off-outline"}
                size={45}
                color={sale ? Colors.BLACK : Colors.GREY}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.toggleRow}>
            <CustomText
              label="New Season"
              fontFamily={fonts.semiBold}
              fontSize={18}
            />
            <TouchableOpacity
              style={styles.toggleBtn}
              onPress={() => setNewSeason((v) => !v)}
              activeOpacity={0.7}
            >
              <Icons
                family="MaterialCommunityIcons"
                name={newSeason ? "toggle-switch" : "toggle-switch-off-outline"}
                size={45}
                color={newSeason ? Colors.BLACK : Colors.GREY}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>

        <CustomButton
          title="Apply Filter"
          backgroundColor={Colors.BLACK}
          borderRadius={4}
          onPress={onDisable}
          loading={loading}
          marginTop={10}
        />
      </View>
    </CustomModal>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 25,
    backgroundColor: Colors.WHITE,
    borderRadius: 24,
    borderTopLeftRadius: 24,
    alignItems: "center",
    paddingTop: 35,
    width: "94%",
    alignSelf: "center",
    height: "94%",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  radioRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 0,
  },
  toggleBtn: {
    marginLeft: 10,
  },
  showAllBtn: {
    marginTop: 24,
    marginBottom: 0,
    width: "100%",
    alignSelf: "center",
    height: 54,
    borderRadius: 0,
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: Colors.LIGHT_GREY,
    marginBottom: 18,
  },
});
