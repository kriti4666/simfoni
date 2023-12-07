import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { productListData } from "../redux/action";

const BestSellingItems = () => {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
    }  

  const prodData = useSelector(
    ({ getProductDataReducer }) => getProductDataReducer
  );
  const dispatch = useDispatch();

  console.log(prodData.data, "best");

  useEffect(() => {
    dispatch(productListData());
  }, []);
  return (
    <div>
      <Slider {...settings}>
        {prodData?.data?.map((product, i) => (
          <Flex gap="20px" mt='50px' w='80%' m='auto'>
            <Box key={i}>
              <Box>
                <img
                  src={
                    product.shipping.url ||
                    "https://assets.wfcdn.com/im/33986792/resize-h800-w800%5Ecompr-r85/2385/238584856/Wayfair+Basics%C2%AE+Thermal+Blackout+Grommet+Curtain+Panel.jpg"
                  }cd e 
                  
                  alt="prod-img"
                />
              </Box>
              <Text>hello</Text>
            </Box>
          </Flex>
        ))}
      </Slider>
    </div>
  );
};

export default BestSellingItems;
