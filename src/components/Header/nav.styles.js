import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const PrimaryNav = styled.nav`
  display: flex;
  background: none;
  justify-content: space-between;
  padding: 1.5rem 100px;
  align-items: center;
  background-color: none;
`;

export const MenuLink = styled(Link)`
  color: #fff;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  height: 100%;
  &.active {
    color: blue;
  }
`;

export const Hamburger = styled(FaBars)`
  display: none;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.9rem;
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
