import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";



const NavWrap = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const NavBig = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    font-size: 40px;
    font-weight: 800;
  }
  img {
    width: 44px;
    height: 44px;
    object-fit: contain;
  }
`;
const NavSmall = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    font-weight: 600;
  }
  div {
    width: 2px;
    height: 20px;
    background-color: #e4e4e4;
  }
  .italic {
    font-style: italic;
    font-weight: 200;
    padding-bottom: 5px;
  }
`;
const NavItem = styled.li`
  border-bottom: 5px solid transparent;
  &:hover {
    border-color: #000;
  }
`;

const StickyNav = () => {
  const navigate = useNavigate();
  return (
    <NavWrap>
      <NavBig>
        <ul>
          <li>
            <a href="#">Special-Order</a>
          </li>
          <li>
            <a href="#">Showcase</a>
          </li>
          <li>
            <a href="#">PT</a>
          </li>
          <li>
            <a href="#">29Magazine</a>
          </li>
        </ul>
        <button>
          <img
            src={process.env.PUBLIC_URL + "/img/main_svg/search.svg"}
            alt=""
          />
        </button>
      </NavBig>
      <NavSmall>
        <ul>
          <NavItem>
            <a href="#">BEST</a>
          </NavItem>
          <NavItem>
            <a href="#">WOMEN</a>
          </NavItem>
          <NavItem>
            <a href="#">MEN</a>
          </NavItem>
          <NavItem>
            <a href="#">INTERIOR</a>
          </NavItem>
          <NavItem>
            <a href="#">KITCHEN</a>
          </NavItem>
          <NavItem>
            <a href="#">ELECTRONICS</a>
          </NavItem>
          <NavItem>
            <a href="#">DIGITAL</a>
          </NavItem>
          <NavItem>
            <a href="#">BEAUTY</a>
          </NavItem>
          <NavItem>
            <a href="#">FOOD</a>
          </NavItem>
          <NavItem>
            <a href="#">LEISURE</a>
          </NavItem>
          <NavItem>
            <a href="#">KIDS</a>
          </NavItem>
          <NavItem>
            <a href="#">CULTURE</a>
          </NavItem>
          <div></div>
          <li className="italic">
            <a href="#">Event</a>
          </li>
          <li className="italic">
            <a href="#">Lookbook</a>
          </li>
          <li className="italic">
            <p onClick={() => navigate('/board')}>++ Board ++</p>
            {/* <a href="#">Board</a> */}
          </li>
        </ul>
      </NavSmall>
    </NavWrap>
  );
};

export default StickyNav;
