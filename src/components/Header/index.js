import React from "react";
import { PrimaryNav, MenuLink, Menu, Hamburger } from "./nav.styles";
const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <h1>NAVBAR</h1>
        <Hamburger />
        <Menu>
          <MenuLink to="/">Home</MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  );
};
export default Navbar;
