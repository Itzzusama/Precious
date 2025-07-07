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
  { label: "Categories", data: ["All", "Watches", "Shoes", "Bags"] },
  { label: "Brands", data: ["All", "Gucci", "Rolex", "LV"] },
  { label: "Size", data: ["All", "S", "M", "L", "XL"] },
  { label: "Product Condition", data: ["All", "New", "Used"] },
  { label: "Price Range", data: ["All", "$0-$100", "$100-$500", "$500+"] },
  { label: "Model", data: ["All", "2024", "2023", "2022"] },
  { label: "Seller Type", data: ["All", "Individual", "Store"] },
];

type FilterModalProps = {
  isVisible: boolean;
  onDisable: () => void;
  onPress: () => void;
  loading?: boolean;
};

type DropdownValues = {
  [key: string]: string;
};

const FilterModal = ({ isVisible, onDisable, onPress, loading }) => {
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

        <ScrollView showsVerticalScrollIndicator={false} >
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
              <CustomText
                label={option}
                fontFamily={
                  selectedSort === option ? fonts.bold : fonts.regular
                }
                fontSize={16}
                marginLeft={10}
                color={Colors.BLACK}
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
            <View style={styles.filterRow} key={filter.label}>
              <CustomDropdown
                data={filter.data}
                value={dropdownValues[filter.label] || filter.data[0]}
                setValue={(val: string) => handleDropdown(filter.label, val)}
                placeholder={filter.label}
                showIcon={false}
                error={undefined}
                withLabel={undefined}
              />
            </View>
          ))}

          <View style={styles.toggleRow}>
            <CustomText label="Vintage" fontFamily={fonts.bold} fontSize={18} />
            <TouchableOpacity
              style={styles.toggleBtn}
              onPress={() => setVintage((v) => !v)}
              activeOpacity={0.7}
            >
              <Icons
                family="MaterialCommunityIcons"
                name={vintage ? "toggle-switch" : "toggle-switch-off-outline"}
                size={38}
                color={vintage ? Colors.BLACK : Colors.LIGHT_GREY_DARK}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.toggleRow}>
            <CustomText label="Sale" fontFamily={fonts.bold} fontSize={18} />
            <TouchableOpacity
              style={styles.toggleBtn}
              onPress={() => setSale((v) => !v)}
              activeOpacity={0.7}
            >
              <Icons
                family="MaterialCommunityIcons"
                name={sale ? "toggle-switch" : "toggle-switch-off-outline"}
                size={38}
                color={sale ? Colors.BLACK : Colors.LIGHT_GREY_DARK}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.toggleRow}>
            <CustomText
              label="New Season"
              fontFamily={fonts.bold}
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
                size={38}
                color={newSeason ? Colors.BLACK : Colors.LIGHT_GREY_DARK}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>

        <CustomButton
          title="Apply Filter"
          backgroundColor={Colors.BLACK}
          borderRadius={4}
          onPress={onPress}
          loading={loading}
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
    width: "90%",
    alignSelf: "center",
    height:"95%"
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
    marginBottom: 8,
  },
  filterRow: {
    marginBottom: 8,
  },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 18,
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
});
