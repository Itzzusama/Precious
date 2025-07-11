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

// Dropdown options
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

// Initial form state
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

  const handleChange = (key: string, value: string | string[]) => {
    setState((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

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

  const handleSubmit = () => {
    if (validate()) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        Alert.alert("Ad Created", "Your ad has been created successfully!");
        setState(initialState);
      }, 1000);
    }
  };

  const handlePickImages = () => {
    handleChange("images", ["image1.png"]);
  };

  // Define form fields
  const inputFields = [
    {
      key: "title",
      placeholder: "Title*",
      label: "Title*",
      errorKey: "title",
    },
    {
      key: "subtitle",
      placeholder: "Subtitle / Model",
      label: "Subtitle / Model",
    },
    {
      key: "price",
      placeholder: "Price*",
      label: "Price*",
      keyboardType: "numeric",
      errorKey: "price",
    },
    {
      key: "oldPrice",
      placeholder: "Old Price (optional)",
      label: "Old Price (optional)",
      keyboardType: "numeric",
    },
    {
      key: "delivery",
      placeholder: "Delivery Time (e.g. Delivery within 10 Days)",
      label: "Delivery Time",
    },
    {
      key: "size",
      placeholder: "Size (e.g. cm 15)",
      label: "Size",
    },
  ];

  const dropdownFields = [
    {
      key: "section",
      label: "Section*",
      data: SECTION_OPTIONS,
      errorKey: "section",
    },
    {
      key: "category",
      label: "Category*",
      data: CATEGORY_OPTIONS,
      errorKey: "category",
    },
    {
      key: "brand",
      label: "Brand*",
      data: BRAND_OPTIONS,
      errorKey: "brand",
    },
    {
      key: "material",
      label: "Jewelry Material",
      data: MATERIAL_OPTIONS,
    },
    {
      key: "color",
      label: "Color",
      data: COLOR_OPTIONS,
    },
    {
      key: "condition",
      label: "Condition*",
      data: CONDITION_OPTIONS,
      errorKey: "condition",
    },
    {
      key: "seller",
      label: "Seller Details",
      data: SELLER_OPTIONS,
    },
  ];

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

      {/* Render input fields */}
      {inputFields.map((field) => (
        <CustomInput
          key={field.key}
          placeholder={field.placeholder}
          value={state[field.key]}
          onChangeText={(text: string) => handleChange(field.key, text)}
          keyboardType={field.keyboardType}
          error={field.errorKey ? errors[field.errorKey] : undefined}
          withLabel={field.label}
        />
      ))}

      {/* Render dropdown fields */}
      {dropdownFields.map((field) => (
        <CustomDropDown
          key={field.key}
          data={field.data}
          value={state[field.key]}
          setValue={(val: string) => handleChange(field.key, val)}
          error={field.errorKey ? errors[field.errorKey] : undefined}
          withLabel={field.label}
        />
      ))}

      {/* Images */}
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

      {/* Description */}
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

      {/* Submit button */}
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
