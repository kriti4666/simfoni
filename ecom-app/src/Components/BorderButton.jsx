import { Button } from "@chakra-ui/react";
import React from "react";

const BorderButton = ({ label }) => {
  return (
    <Button
      color="#38B2AC"
      border="2px solid #38B2AC"
      bg="none"
      display={{ base: "none", md: "flex" }}
    >
      {label}
    </Button>
  );
};
export default BorderButton;
