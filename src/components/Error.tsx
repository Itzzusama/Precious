import React from "react";
import CustomText from "./CustomText";
import { Colors } from "../config/colors";

type ErrorProps = {
  error?: string;
  visible?: boolean;
};

const Error: React.FC<ErrorProps> = ({ error, visible }) => {
  if (!visible || !error) {
    return null;
  }

  return <CustomText label={error} fontSize={12} color={Colors.RED} />;
};

export default Error;
