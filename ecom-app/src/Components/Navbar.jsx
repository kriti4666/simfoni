import React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  VStack,
  Input,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { LuWallet } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import BorderButton from "./BorderButton";
import Home from "../Pages/Home";
import MenuLink from "./MenuLink";

const Links = ["Catalog", "BuyDesk", "History", "Dashboard"];

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="bold"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <IoClose /> : <GiHamburgerMenu />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box w="10%">
              <img
                width="100%"
                src="https://simfoni.com/wp-content/uploads/2021/03/Artboard-1-2.png"
                alt="logo-img"
              />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) =>
                link === "History" ? (
                  <MenuLink key={link} children={link} />
                ) : (
                  <NavLink key={link}>{link}</NavLink>
                )
              )}
            </HStack>
          </HStack>
          <Flex alignItems={"center"} gap="10px">
            <Flex display={{ base: "none", md: "flex" }}>
              <HStack
                width="fit-content"
                border="1px solid gray"
                p="0px 8px"
                borderRadius={"8px"}
              >
                <MenuLink children={"Po"} />
                <HStack>
                  <Input placeholder="Search" />
                  <Box display={{ base: "none", md: "flex" }}>
                    <CiSearch />
                  </Box>
                </HStack>
              </HStack>
            </Flex>
            <Flex>
              <HStack width="fit-content" p="0px 8px" borderRadius={"8px"}>
                <BorderButton label={"Help"} />
                <Box gap="10px" cursor="pointer" display="flex">
                  <LuWallet />
                  <FaRegHeart />
                  <IoCartOutline />
                  <FaRegBell />
                </Box>
              </HStack>
            </Flex>

            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
              >
                <HStack>
                  <Avatar
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">Justina Clark</Text>
                  </VStack>
                  <Box display={{ base: "none", md: "flex" }}>
                    <FaCaretDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                bg={useColorModeValue("white", "gray.900")}
                borderColor={useColorModeValue("gray.200", "gray.700")}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Billing</MenuItem>
                <MenuDivider />
                <MenuItem>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) =>
                link === "History" ? (
                  <MenuLink key={link} children={link} />
                ) : (
                  <NavLink key={link}>{link}</NavLink>
                )
              )}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>
        <Home />
      </Box>
    </>
  );
}
