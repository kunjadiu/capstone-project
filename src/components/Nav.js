/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { HStack, Link } from "@chakra-ui/react";
const names = [
  {
    name: "Home",
    url:"/"
  },
  {
    name: "About",
    url:"/About"
  },
  {
    name: "Menu",
    url:"/Menu"
  },
  {
    name: "Reservations",
    url:"/Reservations"
  },
  {
    name: "Order-Online",
    url:"/Order-Online"
  },
  {
    name: "Login",
    url:"/Login"
  },
];
function Nav() {
  return (
    <nav>
      <HStack spacing={8}>
        /* Add links to Projects and Contact me section */
        {names.map((data) => {
          return (
            <Link
              href={data.url}
              fontWeight="bold"
              pl="10"
              style={{ textDecoration: "none", color: "black" }}
            >
              {data.name}
            </Link>
          );
        })}
      </HStack>
    </nav>
  );
}

export default Nav;
