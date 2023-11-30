import React from "react";
import { Text, Box, Flex, Image } from "@chakra-ui/react";
import garlicBreadLogo from "../images/garlicbread.jpg";
import navbar from 'react'
function HeroSection() {
  return (
    <Box
      backgroundColor={"#495E57"}
      width={"100%"}
      fontFamily={"Markazi"}
      fontWeight={"semibold"}
      color={"#f4ce14"}
      position="fixed"
      top={100}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
    >
      <Flex minWidth="max-content" alignItems="stretch" gap="2"   >
        <section border="0px" margin="10px">
          <Text fontSize="2.5rem" color="" margin={0} marginLeft={"40px"}>
            Little Lemon
          </Text>
          <Text
            fontSize={"1.5rem"}
            color={"white"}
            marginTop={-10}
            marginLeft={"40px"}
          >
            Chicago
          </Text>
          <Text
            fontSize={"1rem"}
            color={"white"}
            margin={0}
            marginLeft={"40px"}
            noOfLines={4}
          >
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </Text>
        </section>
        <Image src={garlicBreadLogo} boxSize={"200px"}></Image>
      </Flex>
    </Box>
  );
}

export default HeroSection;
