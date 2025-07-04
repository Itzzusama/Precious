import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import fonts from "../../assets/fonts";
import { Colors } from "../../config/colors";
import CustomText from "../CustomText";

interface FilterOption {
  id: string;
  label: string;
}

interface FilterButtonsProps {
  options?: FilterOption[];
  onSelectionChange?: (selectedId: string) => void;
  initialSelected?: string;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  options = [
    { id: "all", label: "All" },
    { id: "friends", label: "Friends" },
    { id: "brands", label: "Brands" },
    { id: "best_match", label: "Best match" },
  ],
  onSelectionChange,
  initialSelected = "all",
}) => {
  const [selectedId, setSelectedId] = useState<string>(initialSelected);

  const handlePress = (id: string) => {
    setSelectedId(id);
    onSelectionChange?.(id);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {options.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={[
            styles.button,
            selectedId === option.id && styles.selectedButton,
          ]}
          onPress={() => handlePress(option.id)}
          activeOpacity={0.7}
        >
          <CustomText
            label={option?.label}
            fontFamily={fonts.medium}
            color={selectedId === option.id ? Colors.WHITE : Colors.BLACK}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHT_GREY,
    paddingBottom: 30,
  },
  button: {
    paddingHorizontal: 20,
    height: 38,
    borderRadius: 25,
    borderWidth: 1,
    minWidth: 60,
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.BLACK,
  },
  selectedButton: {
    backgroundColor: Colors.BLACK,
  },

  buttonText: {
    fontSize: 15,
    fontFamily: fonts.medium,
  },
  selectedText: {
    color: "#FFFFFF",
  },
});

export default FilterButtons;
