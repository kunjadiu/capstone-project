/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Nav from "./Nav.js";
import logo from "../images/logo.png";
import { Box, HStack } from "@chakra-ui/react";
function Header() {
  return (
    // <header>
    //     <img src={logo} alt="" width={300+'px'}/>
    //     <Nav/>
    // </header>
    <Box
      position="fixed"
      top={20}
      left={20}
      right={20}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#ffffff"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          fontFamily={"Karla"}
        >
          <a href={"/"} style={{ paddingLeft: 0 + "px" }}>
            <img src={logo} width={200 + "px"} alt="A logo of Image" />
          </a>
          <Nav/>
        </HStack>
      </Box>
    </Box>
  );
}

export default Header;

// src\images\logo.png
