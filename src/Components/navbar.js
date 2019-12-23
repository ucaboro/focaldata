import React, { useState } from "react";
import logo from "../logo.png";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes";

const Navbar = () => {
  let history = useHistory();

  const [hamburger, changeHamburger] = useState(false);
  const onHamburgerClick = () => changeHamburger(!hamburger);
  const onHomeClick = () => history.push(ROUTES.MAIN);

  const action = hamburger ? "is-active" : "";
  const isSurvey = history.location.pathname.includes("survey");
  return (
    <>
      <StyledNavbar isSurvey={isSurvey} className="navbar is-transparent">
        <StyledNavbarBrand className="navbar-brand">
          <div className="navbar-item" onClick={onHomeClick}>
            <StyledImg src={logo} alt="focaldata_logo" />
          </div>
          <div
            className={`navbar-burger burger ${action}`}
            onClick={onHamburgerClick}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </StyledNavbarBrand>
        <StyledNavbarMenu className={`navbar-menu ${action}`}>
          <div className="navbar-end">
            <StyledNavbarItem className="navbar-item" onClick={onHomeClick}>
              Home
            </StyledNavbarItem>
            <StyledNavbarItem
              className="navbar-item"
              href="https://www.focaldata.com/company/about-us"
            >
              About
            </StyledNavbarItem>
          </div>
        </StyledNavbarMenu>
      </StyledNavbar>
    </>
  );
};

const StyledNavbar = styled.nav`
  border-top: 10px solid ${props => (props.isSurvey ? "#14465b" : "#ff6e5a")};
  padding: 30px 0px 30px 20px;
  margin-bottom: 60px;
  @media (max-width: 1024px) {
    padding: 10px;
  }
`;

const StyledNavbarBrand = styled.div`
  cursor: pointer;
`;

const StyledImg = styled.img`
  overflow: hidden;
  max-width: 200px;
  @media (max-width: 1024px) {
    max-width: 200px;
  }
`;

const StyledNavbarItem = styled.a`
  display: flex;
  @media (max-width: 1024px) {
    display: flex;
  }
  &:hover {
    color: #ff6e5a !important;
  }
`;

const StyledNavbarMenu = styled.div`
  background: none;
  box-shadow: none;
`;

export default Navbar;
