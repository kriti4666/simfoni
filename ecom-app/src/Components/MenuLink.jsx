import {
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaCaretDown } from "react-icons/fa";

const MenuLink = ({ children }) => {
  return (
    <Menu>
      <MenuButton
        // as={Button}
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <HStack>
          <Text>{children}</Text>
          <Box display={{ base: "none", md: "flex" }}>
            <FaCaretDown />
          </Box>
        </HStack>
      </MenuButton>

      <MenuList>
        <MenuItem>Link 1</MenuItem>
        <MenuItem>Link 2</MenuItem>
        <MenuItem>Link 3</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuLink;
