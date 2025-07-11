import { StyleSheet, View, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import {
  ScreenWrapper,
  CustomInput,
  CustomButton,
  CustomText,
} from "../../components";
import CustomDropDown from "../../components/CustomDropDown";
import Header from "../../components/Header";

const SECTION_OPTIONS = ["Woman", "Man", "Unisex"];
const CATEGORY_OPTIONS = [
  "Watch",
  "Shoes",
  "Jewelry",
  "Bag",
  "Clothing",
  "Accessories",
];
const BRAND_OPTIONS = ["Rolex", "Gucci", "Patek Philippe", "Other"];
const MATERIAL_OPTIONS = [
  "Gold",
  "White Gold",
  "Silver",
  "Platinum",
  "Leather",
  "Steel",
  "Other",
];
const COLOR_OPTIONS = [
  "Silver",
  "Gold",
  "Black",
  "White",
  "Red",
  "Blue",
  "Other",
];
const CONDITION_OPTIONS = ["New", "Excellent", "Good", "Used"];
const SELLER_OPTIONS = ["Private Seller", "Dealer"];

const initialState = {
  title: "",
  subtitle: "",
  price: "",
  oldPrice: "",
  delivery: "",
  section: "",
  category: "",
  brand: "",
  material: "",
  size: "",
  color: "",
  condition: "",
  seller: "",
  description: "",
  images: [],
};

const initialErrors = {
  title: "",
  price: "",
  section: "",
  category: "",
  brand: "",
  condition: "",
  description: "",
  images: "",
};

type StateType = typeof initialState;
type ErrorsType = typeof initialErrors;

const CreateAd = () => {
  const [state, setState] = useState<StateType>(initialState);
  const [errors, setErrors] = useState<ErrorsType>(initialErrors);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    let valid = true;
    let newErrors: ErrorsType = { ...initialErrors };
    if (!state.title.trim()) {
      newErrors.title = "Title is required";
      valid = false;
    }
    if (
      !state.price.trim() ||
      isNaN(Number(state.price)) ||
      Number(state.price) <= 0
    ) {
      newErrors.price = "Valid price is required";
      valid = false;
    }
    if (!state.section) {
      newErrors.section = "Section is required";
      valid = false;
    }
    if (!state.category) {
      newErrors.category = "Category is required";
      valid = false;
    }
    if (!state.brand) {
      newErrors.brand = "Brand is required";
      valid = false;
    }
    if (!state.condition) {
      newErrors.condition = "Condition is required";
      valid = false;
    }
    if (!state.description.trim()) {
      newErrors.description = "Description is required";
      valid = false;
    }
    if (!state.images || state.images.length === 0) {
      newErrors.images = "At least one image is required";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleChange = (key: string, value: string | string[]) => {
    setState((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handleSubmit = () => {
    if (validate()) {
      setSubmitting(true);
      // Simulate submit
      setTimeout(() => {
        setSubmitting(false);
        Alert.alert("Ad Created", "Your ad has been created successfully!");
        setState(initialState);
      }, 1000);
    }
  };

  // Placeholder for image picker
  const handlePickImages = () => {
    // Simulate picking images
    handleChange("images", ["image1.png"]);
  };

  return (
    <ScreenWrapper
      paddingBottom={24}
      scrollEnabled
      paddingHorizontal={14}
      headerUnScrollable={() => <Header isBack profile name="Create Ad" />}
    >
        <CustomText
          label="Basic Info"
          fontSize={18}
          fontFamily="Roboto-Bold"
          marginBottom={10}
        />
        <CustomInput
          placeholder="Title*"
          value={state.title}
          onChangeText={(text: string) => handleChange("title", text)}
          error={errors.title}
          withLabel="Title*"
        />
        <CustomInput
          placeholder="Subtitle / Model"
          value={state.subtitle}
          onChangeText={(text: string) => handleChange("subtitle", text)}
          withLabel="Subtitle / Model"
        />
        <CustomInput
          placeholder="Price*"
          value={state.price}
          onChangeText={(text: string) => handleChange("price", text)}
          keyboardType="numeric"
          error={errors.price}
          withLabel="Price*"
        />
        <CustomInput
          placeholder="Old Price (optional)"
          value={state.oldPrice}
          onChangeText={(text: string) => handleChange("oldPrice", text)}
          keyboardType="numeric"
          withLabel="Old Price (optional)"
        />
        <CustomInput
          placeholder="Delivery Time (e.g. Delivery within 10 Days)"
          value={state.delivery}
          onChangeText={(text: string) => handleChange("delivery", text)}
          withLabel="Delivery Time"
        />
        <CustomDropDown
          data={SECTION_OPTIONS}
          value={state.section}
          setValue={(val: string) => handleChange("section", val)}
          error={errors.section}
          withLabel="Section*"
        />
        <CustomDropDown
          data={CATEGORY_OPTIONS}
          value={state.category}
          setValue={(val: string) => handleChange("category", val)}
          error={errors.category}
          withLabel="Category*"
        />
        <CustomDropDown
          data={BRAND_OPTIONS}
          value={state.brand}
          setValue={(val: string) => handleChange("brand", val)}
          error={errors.brand}
          withLabel="Brand*"
        />
        <CustomDropDown
          data={MATERIAL_OPTIONS}
          value={state.material}
          setValue={(val: string) => handleChange("material", val)}
          withLabel="Jewelry Material"
        />
        <CustomInput
          placeholder="Size (e.g. cm 15)"
          value={state.size}
          onChangeText={(text: string) => handleChange("size", text)}
          withLabel="Size"
        />
        <CustomDropDown
          data={COLOR_OPTIONS}
          value={state.color}
          setValue={(val: string) => handleChange("color", val)}
          withLabel="Color"
        />
        <CustomDropDown
          data={CONDITION_OPTIONS}
          value={state.condition}
          setValue={(val: string) => handleChange("condition", val)}
          error={errors.condition}
          withLabel="Condition*"
        />
        <CustomDropDown
          data={SELLER_OPTIONS}
          value={state.seller}
          setValue={(val: string) => handleChange("seller", val)}
          withLabel="Seller Details"
        
        />
        <CustomText label="Images*" fontSize={14} marginTop={10} />
        <CustomButton
          title={
            state.images.length > 0
              ? `${state.images.length} Image(s) Selected`
              : "Pick Images"
          }
          onPress={handlePickImages}
          backgroundColor="#eee"
          color="#000"
        />
        {errors.images ? (
          <CustomText label={errors.images} color="red" fontSize={12} />
        ) : null}
        <CustomText
          label="Description*"
          fontSize={18}
          fontFamily="Roboto-Bold"
          marginTop={20}
          marginBottom={10}
        />
        <CustomInput
          placeholder="Description*"
          value={state.description}
          onChangeText={(text: string) => handleChange("description", text)}
          error={errors.description}
          withLabel="Description*"
          multiline
          height={120}
          
        />
        <CustomButton
          title={submitting ? "Submitting..." : "Create Ad"}
          onPress={handleSubmit}
          disabled={submitting}
          marginTop={24}
        />
    </ScreenWrapper>
  );
};

export default CreateAd;

const styles = StyleSheet.create({});
