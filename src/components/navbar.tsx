import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  library,
  IconLookup,
  IconDefinition,
  findIconDefinition,
} from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { DEVICE } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  library.add(faMagnifyingGlass);
  const searchIconLookup: IconLookup = { prefix: "fas", iconName: "magnifying-glass" };
  const searchIcon: IconDefinition = findIconDefinition(searchIconLookup);

  return (
    <Nav>
      <Logo href="">
        Books<span>Reviews</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="">Home</MenuLink>
        <MenuLink href="" selected={true}>Books</MenuLink>
        <MenuLink href="">Reviews</MenuLink>
        <MenuLink href="">News</MenuLink>
        <MenuLink href="">Contact</MenuLink>
        <MenuLink href="">
          <FontAwesomeIcon icon={searchIcon} />
        </MenuLink>
      </Menu>
    </Nav>
  );
};

const Nav = styled.header`
  display: flex;
  padding: 0 10rem;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.default.green};
  @media ${DEVICE.TABLET} {
    padding: 0 1rem;
  }
`;

const Logo = styled.a`
  padding: 1rem 0;
  text-decoration: none;
  font-weight: 800;
  font-size: 3rem;
  color: ${({ theme }) => theme.default.white};
  span {
    font-weight: 300;
    font-size: 3rem;
  }
`;

const Menu = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-size: 2rem;
  @media ${DEVICE.MOBILE} {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const MenuLink = styled.a<{ selected?: boolean }>`
  padding: 1rem;
  cursor: pointer;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  color: ${({ theme, selected }) => selected ? theme.default.black : theme.default.white};
  &:hover {
    color: ${({ theme }) => theme.default.black};
  }
  ${({ selected }) => (selected && `
    &:after {
    content: '';
    position: absolute;
    margin-left: 2px;
    top: 50%;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #151414;
    clear: both;
    `)}
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background-color: ${({ theme }) => theme.default.white};
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media ${DEVICE.MOBILE} {
    display: flex;
  }
`;

export default Navbar;
