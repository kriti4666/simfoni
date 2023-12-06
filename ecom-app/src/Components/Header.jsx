import {
  Box,
  Flex,
  HStack,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useDisclosure,
  ModalFooter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import BorderButton from "./BorderButton";
import MenuLink from "./MenuLink";
import Multiselect from "multiselect-react-dropdown";
import { FaCaretDown } from "react-icons/fa";
import "../App.css";

const filter = [
  {
    title: "Filter",
    link1: "",
    link2: "",
    link3: "",
    link4: "",
  },
];

const data = [
  { name: "simfoni", id: "1" },
  { name: "Sdsfsd", id: "2" },
  { name: "Anna", id: "3" },
  { name: "Meena", id: "4" },
  { name: "Peena", id: "5" },
];

const onSelectValue = () => {
  // logic
};

const onRemoveValue = () => {
  // logic
};

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(12882);

  const handleRangeChange = (newRange) => {
    setMin(newRange[0]);
    setMax(newRange[1]);
  };

  return (
    <Box
      h={["100px", "150px", "180px"]}
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Flex gap="20px" pt="30px">
        <HStack w="50%">
          <input
            style={{
              height: "40px",
              width: "90%",
              borderRadius: " 5px 0 0 5px",
              marginLeft: "20px",
              paddingLeft: "10px",
              // border: "1px solid red",
            }}
            placeholder="Search"
          />
          <Box
            h="40px"
            w="80px"
            color="white"
            bg="#38B2AC"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="0 5px 5px 0"
          >
            <CiSearch style={{ fontSize: "25px" }} />
          </Box>
        </HStack>
        <BorderButton label={"Upload"} />
        <HStack>
          <Button
            px={4}
            py={1}
            rounded={"md"}
            bg="white"
            border="none"
            _hover={{
              textDecoration: "none",
            }}
            onClick={onOpen}
          >
            <HStack gap={"40px"}>
              <Text>Filter</Text>
              <Box display={{ base: "none", md: "flex" }}>
                <FaCaretDown />
              </Box>
            </HStack>
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader></ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormControl display="flex" gap="10px" alignItems="center">
                  <Switch id="isChecked" />
                  <FormLabel htmlFor="isChecked">Top Selling</FormLabel>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="Price">Price</FormLabel>
                  <span id="span">{min}</span> - <span id="span">{max}</span>
                  <RangeSlider
                    aria-label={["min", "max"]}
                    colorScheme="teal"
                    defaultValue={[0, 12882]}
                    onChange={handleRangeChange}
                    mt="25px"
                  >
                    <RangeSliderTrack>
                      <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb index={0} />
                    <RangeSliderThumb index={1} />
                  </RangeSlider>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="brand">Brand</FormLabel>

                  <Multiselect
                    options={data}
                    name="Brand"
                    required
                    onSelect={onSelectValue}
                    onRemove={onRemoveValue}
                    displayValue="name"
                    closeIcon="cancel"
                    placeholder="Select Brand"
                    // selectedValues={selectedArtistOptions}
                    // style={multiselectStyles}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Submit
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Menu>
            <MenuButton
              as={Button}
              px={4}
              py={1}
              bg="white"
              rounded={"md"}
              _hover={{
                textDecoration: "none",
              }}
            >
              <HStack gap={"35px"}>
                <Text>Sort by</Text>
                <Box display={{ base: "none", md: "flex" }}>
                  <FaCaretDown />
                </Box>
              </HStack>
            </MenuButton>

            <MenuList>
              <MenuItem>From A to Z</MenuItem>
              <MenuItem>From Z to A</MenuItem>
              <MenuItem>High to Low</MenuItem>
              <MenuItem>Low to High</MenuItem>
            </MenuList>
          </Menu>
          ;
        </HStack>
      </Flex>
      <Flex
        w="98%"
        m="auto"
        mt={["0px", "15px", "30px"]}
        bg="white"
        p="10px"
        gap="40px"
        rounded="md"
        display={{ base: "none", md: "flex" }}
      >
        <MenuLink children={"All Categories"} />
        <MenuLink children={"Beverages"} />
        <MenuLink children={"Cleaning Supplies"} />
        <MenuLink children={"Food $ Beverages"} />
        <MenuLink children={"Medical Equipment & Supplies"} />
        <MenuLink children={"Office Supplies"} />
      </Flex>
    </Box>
  );
};

export default Header;
