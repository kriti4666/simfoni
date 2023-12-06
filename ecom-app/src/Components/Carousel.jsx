import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getImages } from "../redux/action";

const Carousel = () => {
  const dispatch = useDispatch();
  const imageData = useSelector(
    ({ getSlideImageReducer }) => getSlideImageReducer
  );

 
  useEffect(() => {
    dispatch(getImages());
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {imageData?.data?.map((item, i) => (
          <Box
            key={i}
            w="100%"
            h="60vh"
            bgImage="url('https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgColor="#F0FFF4"
          >
            <Text color="white" as='bold' fontSize='25px' float="left" ml="120px" mt='20px'>
              {item.name} - {item.product_image_type}
            </Text>
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
