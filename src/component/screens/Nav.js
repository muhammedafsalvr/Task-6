import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink tof="/">Dashboard</MenuLink>
        <MenuLink to="/Cardss">Cards</MenuLink>
        <MenuLink to="/SaviNgg">Saving</MenuLink>
        <MenuLink to="/rewards">Rewards</MenuLink>
        <MenuLink to="/notes">Notes</MenuLink>
        <MenuLink to="/submission">Submission</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

const MenuLink = styled(NavLink)`
  padding: 20px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #9e9696;
  transition: all 0.3s ease-in;
  font-size: 14px;

  &:hover {
    color: #000;
  }
`;

const Nav = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  @media all and (max-width: 980px) {
    /* padding: 0px 61px 193px 3px; */
    /* height: 100px; */
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media all and (max-width: 980px) {
    overflow: hidden;
    flex-direction: column;
    height: ${({ isOpen }) => (isOpen ? "600px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    background-color: #fff;
    z-index: 7;
  }
`;

const Hamburger = styled.div`
  display: none;

  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #000;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media all and (max-width: 980px) {
    display: flex;
    margin-top: 30px;
  }
`;
