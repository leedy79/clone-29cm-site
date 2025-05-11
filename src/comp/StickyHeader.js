import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  width: 60px;
  height: atuo;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Nav = styled.nav`
  display: flex;
  gap: 16px;
  a {
    display: flex;
    font-size: 10px;
    align-items: center;
    gap: 4px;
  }
  img {
    width: 18px;
    height: 18px;
  }
`;

const StickyHeader = () => {
  return (
    <Header>
      <Logo>
        <NavLink to="/">
          <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="logo" />
        </NavLink>
      </Logo>
      <Nav>
        <li>
          <NavLink to="/">
            <img
              src={process.env.PUBLIC_URL + "/img/main_svg/mypage.svg"}
              alt=""
            />
            <span>MY PAGE</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <img
              src={process.env.PUBLIC_URL + "/img/main_svg/mylike.svg"}
              alt=""
            />
            <span>MY LIKE</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <img
              src={process.env.PUBLIC_URL + "/img/main_svg/shoppingbag.svg"}
              alt=""
            />
            <span>SHOPPING BAG</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <img
              src={process.env.PUBLIC_URL + "/img/main_svg/login.svg"}
              alt=""
            />
            <span>LOGIN</span>
          </NavLink>
        </li>
      </Nav>
    </Header>
  );
};

export default StickyHeader;
