import React from "react";
import { View, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import CustomText from "../components/CustomText";
import { Colors } from "../config/colors";
import fonts from "../assets/fonts";

type Plan = {
  id: string;
  title: string;
  price: string;
  features: string[];
};

type Props = {
  plan: Plan;
  onSelect: (plan: Plan) => void;
};

const PlanCard: React.FC<Props> = ({ plan, onSelect }) => {
  return (
    <View style={styles.card}>
      <CustomText
        fontSize={18}
        marginBottom={4}
        label={plan?.title}
        fontFamily={fonts.medium}
      />

      <CustomText
        label={plan?.price}
        fontSize={16}
        marginBottom={12}
        fontFamily={fonts.regular}
      />

      <FlatList
        data={plan?.features}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.dot} />
            <CustomText label={item} fontSize={14} />
          </View>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={() => onSelect(plan)}>
        <CustomText
          label={
            plan.price === "Free"
              ? "Select Free Plan"
              : `Select ${plan.title} for ${plan.price}`
          }
          color={Colors.WHITE}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PlanCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.WHITE,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: Colors.LIGHT_GREY,
  },
  button: {
    marginTop: 12,
    backgroundColor: Colors.NAVY_BLUE,
    height: 45,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    columnGap: 8,
    alignItems: "center",
    marginBottom: 5,
  },
  dot: {
    width: 5,
    height: 5,
    backgroundColor: "#000",
    borderRadius: 30,
  },
});
