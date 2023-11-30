/* eslint-disable react/jsx-no-comment-textnodes */
/* /* /* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import {
  HStack,
  Link,
  IconButton,
  MenuList,
  MenuItem,
  MenuButton,
  Menu,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Alert } from "bootstrap";
const names = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/About",
  },
  {
    name: "Menu",
    url: "/Menu",
  },
  {
    name: "Reservations",
    url: "/Reservations",
  },
  {
    name: "Order-Online",
    url: "/Order-Online",
  },
  {
    name: "Login",
    url: "/Login",
  },
];

function Nav() {
  const windowWidth = window.innerWidth;
  return (
    <nav>
      {windowWidth > 767 ? (
        <HStack spacing={8}>
          {names.map((data) => {
            return (
              <Link
                href={data.url}
                fontWeight="bold"
                pl="10"
                style={{ textDecoration: "none", color: "#495E57" }}
              >
                {data.name}
              </Link>
            );
          })}
        </HStack>
      ) : (
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon width={30+'px'} height={30+'px'} color={"#495E57"}/>}
            variant="outline"
            width={20+'px'}
            height={30+'px'}
            background={'none'}
            color={'black'}
          />
          <MenuList backgroundColor={'#f4ce14'} borderRadius={'30px'} margin={'10px'}>
            {names.map((data) => {
              return (
                <MenuItem background={'none'} fontSize={'30px'}>
                  <Link
                    href={data.url}
                    fontWeight="bold"
                    pl="10"
                    style={{ textDecoration: "none", color: "#495E57" }}
                  >
                    {data.name}
                  </Link>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      )}
    </nav>
  );
}

export default Nav;
