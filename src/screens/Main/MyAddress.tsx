import { StyleSheet, Switch, View } from "react-native";
import React, { useState } from "react";
import { CustomInput, CustomText, ScreenWrapper } from "../../components";
import Header from "../../components/Header";
import fonts from "../../assets/fonts";

interface AddressInfo {
  country: string;
  city: string;
  streetAddress: string;
  zipcode: string;
}

interface AddressErrors {
  countryError: string;
  cityError: string;
  streetAddressError: string;
  zipcodeError: string;
}

interface InputField {
  id: number;
  placeholder: string;
  key: keyof AddressInfo;
  value: string;
  error: string;
}

const MyAddress = () => {
  const initialAddress: AddressInfo = {
    country: "USA",
    city: "Los Angeles",
    streetAddress: "1234 Sunset Blvd",
    zipcode: "90026",
  };

  const initialErrors: AddressErrors = {
    countryError: "",
    cityError: "",
    streetAddressError: "",
    zipcodeError: "",
  };

  const [state, setState] = useState<AddressInfo>(initialAddress);
  const [errors, setErrors] = useState<AddressErrors>(initialErrors);

  const inputs: InputField[] = [
    {
      id: 1,
      placeholder: "Country",
      key: "country",
      value: state.country,
      error: errors.countryError,
    },
    {
      id: 2,
      placeholder: "City",
      key: "city",
      value: state.city,
      error: errors.cityError,
    },
    {
      id: 3,
      placeholder: "Street/House/Appartment",
      key: "streetAddress",
      value: state.streetAddress,
      error: errors.streetAddressError,
    },
    {
      id: 4,
      placeholder: "Zipcode",
      key: "zipcode",
      value: state.zipcode,
      error: errors.zipcodeError,
    },
  ];

  return (
    <ScreenWrapper headerUnScrollable={() => <Header isBack />}>
      <CustomText label="Delivery Address" fontSize={18} marginBottom={20} />

      {inputs.map((item) => (
        <CustomInput
          key={item.id}
          placeholder={item.placeholder}
          value={item.value}
          onChangeText={(text: string) =>
            setState((prev) => ({ ...prev, [item.key]: text }))
          }
          autoCapitalize="none"
          error={item.error}
          withLabel={item.placeholder}
          backgroundColor="transparent"
        />
      ))}

      <CustomText label="Billing Address" fontSize={18} marginBottom={20} marginTop={20} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          
        }}
      >
        <CustomText label="Match Delivery Address"fontSize={16} fontFamily={fonts.medium} />
        <Switch />
      </View>
    </ScreenWrapper>
  );
};

export default MyAddress;

const styles = StyleSheet.create({});
