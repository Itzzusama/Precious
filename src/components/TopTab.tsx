import { StyleSheet, TouchableOpacity, View } from "react-native";

import CustomText from "./CustomText";
import fonts from "../assets/fonts";
import { Colors } from "../config/colors";

interface Props {
  tabNames?: string[];
  tab?: string;
  setTab?: (tabName: string) => void;
}

const TopTab: React.FC<Props> = ({ tab, setTab, tabNames = [] }) => {
  return (
    <View style={styles.mainContainer}>
      {tabNames.map((tabName: string, index: number) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() => setTab?.(tabName)}
          style={[styles.item, tab === tabName && styles.activeTab]}
        >
          <CustomText
            fontSize={12}
            label={tabName}
            alignSelf={"center"}
            textTransform="capitalize"
            fontFamily={fonts.medium}
            color={tab === tabName ? Colors.WHITE : Colors.BLACK}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TopTab;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 7,
    paddingHorizontal: 6,
    marginVertical: 8,
    alignItems: "center",
  },
  item: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    width: "45%",
    borderWidth: 1,
    borderColor: Colors.BLACK,
    backgroundColor: Colors.WHITE,
    height: 37,
    borderRadius: 60,
  },

  activeTab: {
    backgroundColor: Colors.BLACK,
  },
});
