import React from "react";
import styled from "styled-components";

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
        <a href="#"><img src="img/logo.png" alt="logo" /></a>
      </Logo>
      <Nav>
        <li><a href="#"><img src="img/main_svg/mypage.svg" alt="" /><span>MY PAGE</span></a></li>
        <li><a href="#"><img src="img/main_svg/mylike.svg" alt="" /><span>MY LIKE</span></a></li>
        <li><a href="#"><img src="img/main_svg/shoppingbag.svg" alt="" /><span>SHOPPING BAG</span></a></li>
        <li><a href="#"><img src="img/main_svg/login.svg" alt="" /><span>LOGIN</span></a></li>
      </Nav>
    </Header>
  );
};

export default StickyHeader;
